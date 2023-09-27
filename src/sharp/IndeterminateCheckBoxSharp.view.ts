import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class IndeterminateCheckBoxSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M21 3H3v18h18V3zm-4 10H7v-2h10v2z\"/>")
      .name("IndeterminateCheckBoxSharp")
  }
}

export default IndeterminateCheckBoxSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
