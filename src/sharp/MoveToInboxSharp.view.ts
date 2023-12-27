import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MoveToInboxSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 3H3v18h18V3zm-2 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z\"/>")
      .name("MoveToInboxSharp")
  }
}

export default MoveToInboxSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
