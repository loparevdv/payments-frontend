import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLImageElement
import kotlin.browser.document
import kotlin.dom.addClass


class TileBuilder {
    fun build(paymentOption: PaymentOption): HTMLElement {
        val containerElement = document.createElement("div") as HTMLDivElement
        val titleElement = document.createElement("div") as HTMLDivElement
        val imageElement = document.createElement("img") as HTMLImageElement
        val descriptionElement = document.createElement("div") as HTMLDivElement

        bind(
                paymentOption=paymentOption,
                titleElement=titleElement,
                imageElement = imageElement,
                descriptionElement = descriptionElement
        )
        applyStyle(
                containerElement=containerElement,
                titleElement = titleElement,
                imageElement = imageElement,
                descriptionElement = descriptionElement
        )

        return containerElement
    }

    private fun applyStyle(
            containerElement: HTMLDivElement,
            titleElement: HTMLDivElement,
            imageElement: HTMLImageElement,
            descriptionElement: HTMLDivElement
    ) {
        containerElement.addClass("card", "card-shadow")
        titleElement.addClass("text-title", "float-left")
        imageElement.addClass("cover-image")
        descriptionElement.addClass("text-description", "float-left")
    }

    private fun bind(
            paymentOption: PaymentOption,
            titleElement: HTMLDivElement,
            imageElement: HTMLImageElement,
            descriptionElement: HTMLDivElement
    ) {
        titleElement.innerHTML = paymentOption.name
        imageElement.src = paymentOption.logoUrl
        descriptionElement.innerHTML = paymentOption.description
    }
}