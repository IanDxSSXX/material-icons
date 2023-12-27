import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class HorizontalRuleOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path fill-rule=\"evenodd\" d=\"M4 11h16v2H4z\"/>")
      .name("HorizontalRuleOutlined")
  }
}

export default HorizontalRuleOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
