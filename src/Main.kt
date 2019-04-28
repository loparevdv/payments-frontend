const val API_URL = "http://localhost:8080/payment_option"

fun main() {
    val paymentOptionListPresenter = PaymentOptionListPresenter()
    val paymentOptionListPage = PaymentOptionListPage(paymentOptionListPresenter)
    paymentOptionListPage.show()
}