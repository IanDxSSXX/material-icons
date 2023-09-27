import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class VerticalSplitFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M3 15h8v-2H3v2zm0 4h8v-2H3v2zm0-8h8V9H3v2zm0-6v2h8V5H3zm10 0h8v14h-8V5z\"/>")
      .name("VerticalSplitFilled")
  }
}

export default VerticalSplitFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>
