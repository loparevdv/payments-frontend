import kotlinx.serialization.internal.StringSerializer
import kotlinx.serialization.json.Json
import kotlinx.serialization.map
import org.w3c.dom.HTMLDivElement
import kotlin.browser.document

class PaymentOptionFormPage(private val presenter: PaymentOptionFormContract.Presenter): PaymentOptionFormContract.View {
    private val loader = document.getElementById("loader") as HTMLDivElement
    private val content = document.getElementById("content") as HTMLDivElement

    override fun showPaymentOptionForm(codename: String, paymentOptionFormFields: PaymentOptionFormFields) {
        val formBuilder = FormBuilder(codename, paymentOptionFormFields)
        content.appendChild(formBuilder.build())
    }

    override fun hidePaymentOptionForm() {
        content.innerHTML = ""
    }

    fun submitPaymentOptionForm(codename: String, formData: List<Pair<String, String>>) {
        val mapData = formData.associate { it.first to it.second }
        val serial = (StringSerializer to StringSerializer).map

        presenter.attach(this)
        presenter.processCreateInvoice(codename, Json.stringify(serial, mapData))
    }

    override fun showPaymentOptionFormErrors(jsonErrors: String) {
        println("ERRORS: $jsonErrors")
    }

    override fun showPaymentOptionFormSuccess() {
        println("SUCCESS")
    }

    override fun showLoader() {
        loader.style.display = "visible"
    }

    override fun hideLoader() {
        loader.style.display = "none"
    }

    fun show(codename: String) {
        presenter.attach(this)
        presenter.loadPaymentOptionForm(codename)
    }
}