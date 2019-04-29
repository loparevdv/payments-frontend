import org.w3c.xhr.XMLHttpRequest


class PaymentOptionFormPresenter :PaymentOptionFormContract.Presenter {
    private lateinit var view:PaymentOptionFormContract.View
    override fun attach(view:PaymentOptionFormContract.View) {
        this.view = view
    }

    override fun loadPaymentOptionForm(codename: String) {
        view.showLoader()
        // TODO: suppose to be a better way of url joining :O
        val URL = "http://localhost:8080/payment_option/$codename"
        getAsync(URL) { response ->
            val paymentOptionForm= JSON.parse<PaymentOptionForm>(response)
            view.hideLoader()
            view.showPaymentOptionForm(codename, paymentOptionForm)
        }
    }

    fun submitPaymentOptionForm(codename: String, formData: HashMap<String, String>) {
        // TODO: cast to JSON properly
        println(formData.toString())
        val URL = "http://localhost:8080/payment_option/$codename"
        postAsync(URL, formData) {
            println(it)
        }
    }

    private fun postAsync(url: String, data: HashMap<String, String>, callback: (String) -> Unit) {
        val xmlHttp = XMLHttpRequest()
        xmlHttp.open("POST", url, true)
        xmlHttp.setRequestHeader("Content-Type", "application/json")
        xmlHttp.onreadystatechange = {
            if (xmlHttp.readyState == 4.toShort() && xmlHttp.status == 200.toShort()) {
                println("YAY! Done!")
            }
            else { println("Something wrong") }
        }
        xmlHttp.send(data.toString())
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