import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class SubscriptSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M20 18v1h3v1h-4v-3h3v-1h-3v-1h4v3h-3zM5.88 18h2.66l3.4-5.42h.12l3.4 5.42h2.66l-4.65-7.27L17.81 4h-2.68l-3.07 4.99h-.12L8.85 4H6.19l4.32 6.73L5.88 18z\"/>")
      .name("SubscriptSharp")
  }
}

export default SubscriptSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
