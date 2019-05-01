import org.w3c.xhr.XMLHttpRequest

import kotlinx.serialization.json.Json
import kotlinx.serialization.*
import kotlinx.serialization.internal.StringSerializer

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
            val paymentOptionForm= JSON.parse<PaymentOptionFormFields>(response)
            view.hideLoader()
            view.showPaymentOptionForm(codename, paymentOptionForm)
        }
    }

    override fun submitPaymentOptionForm(codename: String, jsonPayload: String) {
        val URL = "http://localhost:8080/payment_option/$codename"
        postAsync(URL, jsonPayload) { response ->
            if (response != "") view.showPaymentOptionFormErrors(response) else view.showPaymentOptionFormSuccess()

        }
    }

    private fun postAsync(url: String, data: String, callback: (String) -> Unit) {
        val xmlHttp = XMLHttpRequest()
        xmlHttp.open("POST", url, true)
        xmlHttp.setRequestHeader("Content-Type", "application/json")
        xmlHttp.onreadystatechange = {
            // TODO: might be better routing
            if (xmlHttp.readyState == 4.toShort() && xmlHttp.status == 200.toShort()) {
                callback.invoke("")
            }
            if (xmlHttp.readyState == 4.toShort() && xmlHttp.status == 400.toShort()) {
                callback.invoke(xmlHttp.responseText)
            }
        }
        xmlHttp.send(data)
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