import org.w3c.dom.*
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.addClass


class FormBuilder {
    fun build(paymentOptionForm: PaymentOptionForm): HTMLElement {
        val containerElement = document.createElement("div") as HTMLDivElement
        val titleElement = document.createElement("div") as HTMLDivElement
        val imageElement = document.createElement("img") as HTMLImageElement
        val viewDetailsBackButtonElement = document.createElement("button") as HTMLButtonElement
        val viewFormSubmitButtonElement = document.createElement("button") as HTMLButtonElement

        bind(
                paymentOptionForm=paymentOptionForm,
                titleElement=titleElement,
                imageElement = imageElement,
                viewDetailsBackButtonElement = viewDetailsBackButtonElement
        )
        applyStyle(
                containerElement=containerElement,
                titleElement = titleElement,
                imageElement = imageElement,
                viewDetailsBackButtonElement = viewDetailsBackButtonElement
        )

        containerElement.appendChild(
                titleElement,
                imageElement,
                viewDetailsBackButtonElement
        )

        val schema= JSON.parse<Array<String>>(paymentOptionForm.schema)

        schema.forEach {
            val input = document.createElement("input") as HTMLInputElement
            input.innerHTML = it
            containerElement.appendChild(input)
        }

        return containerElement
    }

    private fun applyStyle(
            containerElement: HTMLDivElement,
            titleElement: HTMLDivElement,
            imageElement: HTMLImageElement,
            viewDetailsBackButtonElement: HTMLButtonElement
    ) {
        containerElement.addClass("form", "form-shadow")
        titleElement.addClass("text-title", "float-left")
        imageElement.addClass("cover-image")
        viewDetailsBackButtonElement.addClass("view-details", "ripple", "float-right")
    }

    private fun bind(
            paymentOptionForm: PaymentOptionForm,
            titleElement: HTMLDivElement,
            imageElement: HTMLImageElement,
            viewDetailsBackButtonElement: HTMLButtonElement,
    ) {
        titleElement.innerHTML = paymentOptionForm.name
        imageElement.src = paymentOptionForm.logoUrl

        viewDetailsBackButtonElement.innerHTML = "BACK"
        viewDetailsBackButtonElement.addEventListener("click", {
            val paymentOptionFormPresenter = PaymentOptionFormPresenter()
            val paymentOptionFormPage = PaymentOptionFormPage(paymentOptionFormPresenter)
            paymentOptionFormPage.hidePaymentOptionForm()

            val paymentOptionListPresenter = PaymentOptionListPresenter()
            val paymentOptionListPage = PaymentOptionListPage(paymentOptionListPresenter)
            paymentOptionListPage.show()
        })
    }

    private fun Element.appendChild(vararg elements: Element) {
        elements.forEach {
            this.appendChild(it)
        }
    }
}