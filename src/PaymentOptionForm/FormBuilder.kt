import org.w3c.dom.*
import kotlin.browser.document
import kotlin.dom.addClass

class FormBuilder {
    fun build(codename: String, paymentOptionForm: PaymentOptionForm): HTMLElement {
        val containerElement = document.createElement("div") as HTMLDivElement
        val titleElement = document.createElement("div") as HTMLDivElement
        val imageElement = document.createElement("img") as HTMLImageElement
        val viewDetailsBackButtonElement = document.createElement("button") as HTMLButtonElement
        val viewFormSubmitButtonElement = document.createElement("button") as HTMLButtonElement

        titleElement.innerHTML = paymentOptionForm.name
        imageElement.src = paymentOptionForm.logoUrl

        viewFormSubmitButtonElement.innerHTML = "SUBMIT"
        viewFormSubmitButtonElement.addEventListener("click", {
            val formData = getFormData(paymentOptionForm)
            submitForm(codename, formData)
        })

        viewDetailsBackButtonElement.innerHTML = "BACK"
        viewDetailsBackButtonElement.addEventListener("click", {
            goBack()
        })
        containerElement.addClass("form", "form-shadow")
        titleElement.addClass("text-title", "float-left")
        imageElement.addClass("cover-image")
        viewFormSubmitButtonElement.addClass("submit", "ripple", "float-right")
        viewDetailsBackButtonElement.addClass("back", "ripple", "float-right")

        containerElement.appendChild(
                titleElement,
                imageElement,
                viewDetailsBackButtonElement,
                viewFormSubmitButtonElement
        )

        val schema= JSON.parse<Array<String>>(paymentOptionForm.schema)

        schema.forEach {
            val input = document.createElement("input") as HTMLInputElement
            input.placeholder = it
            input.id = it
            input.addClass("form-input")
            containerElement.appendChild(input)
        }

        return containerElement
    }

    private fun getFormData(paymentOptionForm: PaymentOptionForm): List<Pair<String, String>> {
        val schema= JSON.parse<Array<String>>(paymentOptionForm.schema)

        val values = schema.map {
            val input = document.getElementById(it) as HTMLInputElement
            input.value
        }
        val pairs = schema.zip(values)
        return pairs
    }

    private fun submitForm(codename: String, formData: List<Pair<String, String>>) {
        val paymentOptionFormPresenter = PaymentOptionFormPresenter()
        paymentOptionFormPresenter.submitPaymentOptionForm(codename, formData)
    }

    private fun goBack() {
        val paymentOptionFormPresenter = PaymentOptionFormPresenter()
        val paymentOptionFormPage = PaymentOptionFormPage(paymentOptionFormPresenter)
        paymentOptionFormPage.hidePaymentOptionForm()

        val paymentOptionListPresenter = PaymentOptionListPresenter()
        val paymentOptionListPage = PaymentOptionListPage(paymentOptionListPresenter)
        paymentOptionListPage.show()
    }

    private fun Element.appendChild(vararg elements: Element) {
        elements.forEach {
            this.appendChild(it)
        }
    }
}