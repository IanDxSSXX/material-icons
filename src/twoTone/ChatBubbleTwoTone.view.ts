import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ChatBubbleTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m4 18 2-2h14V4H4z\" opacity=\".3\"/><path d=\"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z\"/>")
      .name("ChatBubbleTwoTone")
  }
}

export default ChatBubbleTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>