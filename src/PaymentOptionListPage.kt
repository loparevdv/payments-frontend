import org.w3c.dom.HTMLDivElement
import kotlin.browser.document

class PaymentOptionListPage(private val presenter: PaymentOptionListContract.Presenter): PaymentOptionListContract.View {
    private val loader = document.getElementById("loader") as HTMLDivElement
    private val content = document.getElementById("content") as HTMLDivElement

    private var tileBuilder = TileBuilder()

    override fun showPaymentOptions(paymentOptions: List<PaymentOption>) {
        paymentOptions.forEach { paymentOption ->
            println(paymentOption)
            var tile = tileBuilder.build(paymentOption)
            println(tile)
            content.appendChild(tile)
        }
    }

    override fun showLoader() {
        println("showLoader")
    }

    override fun hideLoader() {
        loader.style.display = "none"
        println("hideLoader")
    }

    fun show() {
        presenter.attach(this)
        presenter.loadPaymentOptions()
    }
}