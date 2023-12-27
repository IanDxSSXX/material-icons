import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class RemoveFromQueueSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M23 3H1v16h7v2h8v-2h7V3zm-2 14H3V5h18v12zm-5-7v2H8v-2h8z\"/>")
      .name("RemoveFromQueueSharp")
  }
}

export default RemoveFromQueueSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
