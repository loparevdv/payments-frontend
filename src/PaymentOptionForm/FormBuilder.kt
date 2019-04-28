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
        val viewDetailsButtonElement = document.createElement("button") as HTMLButtonElement

        bind(
                paymentOptionForm=paymentOptionForm,
                titleElement=titleElement,
                imageElement = imageElement,
                descriptionElement = descriptionElement,
                viewDetailsButtonElement = viewDetailsButtonElement
        )
        applyStyle(
                containerElement=containerElement,
                titleElement = titleElement,
                imageElement = imageElement,
                descriptionElement = descriptionElement,
                viewDetailsButtonElement = viewDetailsButtonElement
        )

        containerElement.appendChild(
                titleElement,
                imageElement,
                descriptionElement,
                viewDetailsButtonElement
        )

        return containerElement
    }

    private fun applyStyle(
            containerElement: HTMLDivElement,
            titleElement: HTMLDivElement,
            imageElement: HTMLImageElement,
            descriptionElement: HTMLDivElement,
            viewDetailsButtonElement: HTMLButtonElement
    ) {
        containerElement.addClass("card", "card-shadow")
        titleElement.addClass("text-title", "float-left")
        imageElement.addClass("cover-image")
        descriptionElement.addClass("text-description", "float-left")
        viewDetailsButtonElement.addClass("view-details", "ripple", "float-right")
    }

    private fun bind(
            paymentOptionForm: PaymentOptionForm,
            titleElement: HTMLDivElement,
            imageElement: HTMLImageElement,
            descriptionElement: HTMLDivElement,
            viewDetailsButtonElement: HTMLButtonElement
    ) {
        titleElement.innerHTML = paymentOptionForm.name
        imageElement.src = paymentOptionForm.logoUrl
        descriptionElement.innerHTML = paymentOptionForm.description

        viewDetailsButtonElement.innerHTML = "view details"
        viewDetailsButtonElement.addEventListener("click", {
            //            window.open(paymentOption.url)
        })
    }

    private fun Element.appendChild(vararg elements: Element) {
        elements.forEach {
            this.appendChild(it)
        }
    }
}