import org.w3c.xhr.XMLHttpRequest


class PaymentOptionFormPresenter :PaymentOptionFormContract.Presenter {
    private lateinit var view:PaymentOptionFormContract.View
    override fun attach(view:PaymentOptionFormContract.View) {
        this.view = view
    }

    override fun loadPaymentOptionForm() {
        view.showLoader()
        getAsync(API_URL) { response ->
            val paymentOptionForms = JSON.parse<Array<PaymentOptionForm>>(response)
            view.hideLoader()
            view.showPaymentOptionForm(paymentOptionForms.toList()[0])
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