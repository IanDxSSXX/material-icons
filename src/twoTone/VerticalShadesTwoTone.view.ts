import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class VerticalShadesTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M6 5h2v14H6zm10 0h2v14h-2z\" opacity=\".3\"/><path d=\"M20 19V3H4v16H2v2h20v-2h-2zM8 19H6V5h2v14zm6 0h-4V5h4v14zm4 0h-2V5h2v14z\"/>")
      .name("VerticalShadesTwoTone")
  }
}

export default VerticalShadesTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
