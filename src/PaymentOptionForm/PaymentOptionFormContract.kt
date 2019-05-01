interface PaymentOptionFormContract {
    interface View {
        fun showPaymentOptionForm(codename: String, paymentOptionFormFields: PaymentOptionFormFields) // 1
        fun hidePaymentOptionForm()
        fun showLoader() // 2
        fun hideLoader() // 3
    }

    interface Presenter {
        fun attach(view: View) // 4
        fun loadPaymentOptionForm(codename: String) // 5
    }
}
