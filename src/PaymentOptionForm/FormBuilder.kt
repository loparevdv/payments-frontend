import org.w3c.dom.*
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.addClass


class FormBuilder {
    fun build(paymentOptionForm: PaymentOptionForm): HTMLElement {
        val containerElement = document.createElement("div") as HTMLDivElement
        val titleElement = document.createElement("div") as HTMLDivElement
        val imageElement = document.createElement("img") as HTMLImageElement
        val descriptionElement = document.createElement("div") as HTMLDivElement
        val viewDetailsBackButtonElement = document.createElement("button") as HTMLButtonElement

        bind(
                paymentOptionForm=paymentOptionForm,
                titleElement=titleElement,
                imageElement = imageElement,
                descriptionElement = descriptionElement,
                viewDetailsBackButtonElement = viewDetailsBackButtonElement
        )
        applyStyle(
                containerElement=containerElement,
                titleElement = titleElement,
                imageElement = imageElement,
                descriptionElement = descriptionElement,
                viewDetailsBackButtonElement = viewDetailsBackButtonElement
        )

        containerElement.appendChild(
                titleElement,
                imageElement,
                descriptionElement,
                viewDetailsBackButtonElement
        )

        return containerElement
    }

    private fun applyStyle(
            containerElement: HTMLDivElement,
            titleElement: HTMLDivElement,
            imageElement: HTMLImageElement,
            descriptionElement: HTMLDivElement,
            viewDetailsBackButtonElement: HTMLButtonElement
    ) {
        containerElement.addClass("form", "form-shadow")
        titleElement.addClass("text-title", "float-left")
        imageElement.addClass("cover-image")
        descriptionElement.addClass("text-description", "float-left")
        viewDetailsBackButtonElement.addClass("view-details", "ripple", "float-right")
    }

    private fun bind(
            paymentOptionForm: PaymentOptionForm,
            titleElement: HTMLDivElement,
            imageElement: HTMLImageElement,
            descriptionElement: HTMLDivElement,
            viewDetailsBackButtonElement: HTMLButtonElement
    ) {
        titleElement.innerHTML = paymentOptionForm.name
        imageElement.src = paymentOptionForm.logoUrl
        descriptionElement.innerHTML = paymentOptionForm.description

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