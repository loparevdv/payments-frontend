import org.w3c.xhr.XMLHttpRequest

class PaymentOptionListPresenter : PaymentOptionListContract.Presenter {
    private lateinit var view: PaymentOptionListContract.View
    override fun attach(view: PaymentOptionListContract.View) {
        this.view = view
    }

    override fun loadPaymentOptions() {
        view.showLoader()
        getAsync(API_URL) { response ->
            val paymentOptions = JSON.parse<Array<PaymentOption>>(response)
            view.hideLoader()
            view.showPaymentOptions(paymentOptions.toList())

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