import org.w3c.xhr.XMLHttpRequest
import kotlin.js.Json
import kotlin.js.json
//import kotlinx.serialization.*
//import kotlinx.serialization.json.Json


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
        // TODO: cast to JSON properly
        val mapData = HashMap<String, String>()
        formData.forEach { mapData[it.first] = it.second }
        println(JSON.stringify(mapData))
        println("123---")
//        Json().toJson(mapData)
        val mapData1 = formData.associate { it.first to it.second }
        println(mapData1.toString())
        println(JSON.stringify(mapData1))
        println("123---")

        val jsonFormData = JSON.stringify(formData)
        val URL = "http://localhost:8080/payment_option/$codename"
        postAsync(URL, jsonFormData) {
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