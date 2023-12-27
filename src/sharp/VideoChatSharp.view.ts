import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class VideoChatSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2 2v20l4-4h16V2H2zm15 11-2-1.99V14H7V6h8v2.99L17 7v6z\"/>")
      .name("VideoChatSharp")
  }
}

export default VideoChatSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
