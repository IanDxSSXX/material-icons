import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ChatBubbleRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z\"/>")
      .name("ChatBubbleRound")
  }
}

export default ChatBubbleRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
