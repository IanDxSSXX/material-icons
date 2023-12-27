import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class VoiceChatSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 2H2.01L2 22l4-4h16V2zm-4 12-4-3.2V14H6V6h8v3.2L18 6v8z\"/>")
      .name("VoiceChatSharp")
  }
}

export default VoiceChatSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
