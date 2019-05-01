interface PaymentOptionFormContract {
    interface View {
        fun showPaymentOptionForm(codename: String, paymentOptionFormFields: PaymentOptionFormFields)
        fun hidePaymentOptionForm()

        fun showPaymentOptionFormErrors(jsonErrors: String)
        fun showPaymentOptionFormSuccess()

        fun showLoader()
        fun hideLoader()
    }

    interface Presenter {
        fun attach(view: View)
        fun loadPaymentOptionForm(codename: String)
        fun processCreateInvoice(codename: String, jsonPayload: String)
    }
}
