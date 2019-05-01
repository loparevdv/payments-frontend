import org.w3c.dom.HTMLDivElement
import kotlin.browser.document

class PaymentOptionFormPage(private val presenter: PaymentOptionFormContract.Presenter): PaymentOptionFormContract.View {
    private val loader = document.getElementById("loader") as HTMLDivElement
    private val content = document.getElementById("content") as HTMLDivElement

    override fun showPaymentOptionForm(codename: String, paymentOptionFormFields: PaymentOptionFormFields) {
        var form = FormBuilder().build(codename, paymentOptionFormFields)
        content.appendChild(form)
    }

    override fun hidePaymentOptionForm() {
        content.innerHTML = ""
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