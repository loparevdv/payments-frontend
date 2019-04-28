interface PaymentOptionFormContract {
    interface View {
        fun showPaymentOptionForm(paymentOptionForm: PaymentOptionForm) // 1
        fun showLoader() // 2
        fun hideLoader() // 3
    }

    interface Presenter {
        fun attach(view: View) // 4
        fun loadPaymentOptionForm() // 5
    }
}
