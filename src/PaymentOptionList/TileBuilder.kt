import org.w3c.dom.*
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.addClass


class TileBuilder {
    fun build(paymentOption: PaymentOption): HTMLElement {
        val containerElement = document.createElement("div") as HTMLDivElement
        val titleElement = document.createElement("div") as HTMLDivElement
        val imageElement = document.createElement("img") as HTMLImageElement
        val descriptionElement = document.createElement("div") as HTMLDivElement
        val viewDetailsButtonElement = document.createElement("button") as HTMLButtonElement

        bind(
                paymentOption=paymentOption,
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
            paymentOption: PaymentOption,
            titleElement: HTMLDivElement,
            imageElement: HTMLImageElement,
            descriptionElement: HTMLDivElement,
            viewDetailsButtonElement: HTMLButtonElement
    ) {
        titleElement.innerHTML = paymentOption.name
        imageElement.src = paymentOption.logoUrl
        descriptionElement.innerHTML = paymentOption.description

        viewDetailsButtonElement.innerHTML = "view details"
        viewDetailsButtonElement.addEventListener("click", {

            val paymentOptionListPresenter = PaymentOptionListPresenter()
            val paymentOptionListPage = PaymentOptionListPage(paymentOptionListPresenter)
            paymentOptionListPage.hidePaymentOptions()

            val paymentOptionFormPresenter = PaymentOptionFormPresenter()
            val paymentOptionFormPage = PaymentOptionFormPage(paymentOptionFormPresenter)
            paymentOptionFormPage.show()

        })
    }

    private fun Element.appendChild(vararg elements: Element) {
        elements.forEach {
            this.appendChild(it)
        }
    }
}