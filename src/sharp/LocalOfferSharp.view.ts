import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class LocalOfferSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M22.83 12.99 11.83 2H2v9.83l10.99 10.99 9.84-9.83zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z\"/>")
      .name("LocalOfferSharp")
  }
}

export default LocalOfferSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
