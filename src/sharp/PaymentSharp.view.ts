import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PaymentSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 4H2v16h20V4zm-2 14H4v-6h16v6zm0-10H4V6h16v2z\"/>")
      .name("PaymentSharp")
  }
}

export default PaymentSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
