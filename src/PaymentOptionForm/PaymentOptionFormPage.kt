import org.w3c.dom.HTMLDivElement
import kotlin.browser.document

class PaymentOptionFormPage(private val presenter: PaymentOptionFormContract.Presenter): PaymentOptionFormContract.View {
    private val loader = document.getElementById("loader") as HTMLDivElement
    private val content = document.getElementById("content") as HTMLDivElement

    override fun showPaymentOptionForm(paymentOptionForm: PaymentOptionForm) {
        var form = FormBuilder().build(paymentOptionForm)
        content.appendChild(form)
    }

    override fun hidePaymentOptionForm() {
        content.innerHTML = ""
    }


    override fun showLoader() {
    }

    override fun hideLoader() {
        loader.style.display = "none"
    }

    fun show(codename: String) {
        println(codename)
        presenter.attach(this)
        presenter.loadPaymentOptionForm()
    }
}