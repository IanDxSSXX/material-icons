import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class HorizontalRuleSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path fill-rule=\"evenodd\" d=\"M4 11h16v2H4z\"/>")
      .name("HorizontalRuleSharp")
  }
}

export default HorizontalRuleSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>