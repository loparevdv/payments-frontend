import org.w3c.xhr.XMLHttpRequest

import kotlinx.serialization.json.Json
import kotlinx.serialization.*
import kotlinx.serialization.internal.ArrayListSerializer
import kotlinx.serialization.internal.ListLikeSerializer
import kotlinx.serialization.internal.PairSerializer
import kotlinx.serialization.internal.StringSerializer

@Serializable
data class Payload(val payload: Map<String, String>)


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

    fun submitPaymentOptionForm(codename: String, formData: List<Pair<String, String>>) {
        val mapData1 = formData.associate { it.first to it.second }
        val serial = (StringSerializer to StringSerializer).map
        val jsonPayload = Json.stringify(serial, mapData1)
        val URL = "http://localhost:8080/payment_option/$codename"
        postAsync(URL, jsonPayload) {
            println(it)
        }
    }

    private fun postAsync(url: String, data: String, callback: (String) -> Unit) {
        val xmlHttp = XMLHttpRequest()
        xmlHttp.open("POST", url, true)
        xmlHttp.setRequestHeader("Content-Type", "application/json")
        xmlHttp.onreadystatechange = {
            if (xmlHttp.readyState == 4.toShort() && xmlHttp.status == 200.toShort()) {
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