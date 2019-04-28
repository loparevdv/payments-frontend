import org.w3c.xhr.XMLHttpRequest


class PaymentOptionFormPresenter :PaymentOptionFormContract.Presenter {
    private lateinit var view:PaymentOptionFormContract.View
    override fun attach(view:PaymentOptionFormContract.View) {
        this.view = view
    }

    override fun loadPaymentOptionForm(codename: String) {
        view.showLoader()
        // TODO: supposed to be better way url joining :O
        val URL = "http://localhost:8080/payment_option/"
        getAsync("$URL$codename") { response ->
            val paymentOptionForm= JSON.parse<PaymentOptionForm>(response)
            view.hideLoader()
            view.showPaymentOptionForm(paymentOptionForm)
        }
    }

    private fun getAsync(url: String, callback: (String) -> Unit) {

        val xmlHttp = XMLHttpRequest()
        xmlHttp.open("GET", url)
        xmlHttp.setRequestHeader("Content-Type", "application/json")
        xmlHttp.onload = {
            if (xmlHttp.readyState == 4.toShort() && xmlHttp.status == 200.toShort()) {
                callback.invoke(xmlHttp.responseText)
            }
        }
        xmlHttp.send()
    }

}