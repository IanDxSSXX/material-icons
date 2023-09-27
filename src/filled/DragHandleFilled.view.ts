import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class DragHandleFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M20 9H4v2h16V9zM4 15h16v-2H4v2z\"/>")
      .name("DragHandleFilled")
  }
}

export default DragHandleFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>