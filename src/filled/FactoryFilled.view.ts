import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class FactoryFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M22 10v12H2V10l7-3v2l5-2v3h8zm-4.8-1.5L18 2h3l.8 6.5h-4.6zM11 18h2v-4h-2v4zm-4 0h2v-4H7v4zm10-4h-2v4h2v-4z\"/>")
      .name("FactoryFilled")
  }
}

export default FactoryFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>
