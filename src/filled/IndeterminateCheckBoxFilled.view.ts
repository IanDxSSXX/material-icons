import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class IndeterminateCheckBoxFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z\"/>")
      .name("IndeterminateCheckBoxFilled")
  }
}

export default IndeterminateCheckBoxFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>