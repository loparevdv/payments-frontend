interface PaymentOptionListContract {
    interface View {
        fun showPaymentOptions(paymentOptions: List<PaymentOption>) // 1
        fun hidePaymentOptions()
        fun showLoader() // 2
        fun hideLoader() // 3
    }

    interface Presenter {
        fun attach(view: View) // 4
        fun loadPaymentOptions() // 5
    }
}
