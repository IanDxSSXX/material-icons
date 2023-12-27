import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DragHandleFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 9H4v2h16V9zM4 15h16v-2H4v2z\"/>")
      .name("DragHandleFilled")
  }
}

export default DragHandleFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
