import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MarkChatUnreadTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 16h16V7.9A5 5 0 0 1 14.1 4H4v12z\" opacity=\".3\"/><path d=\"M20 7.9c.74-.15 1.42-.48 2-.92V16c0 1.1-.9 2-2 2H6l-4 4V4c0-1.1.9-2 2-2h10.1c-.06.32-.1.66-.1 1s.04.68.1 1H4v12h16V7.9zM16 3c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z\"/>")
      .name("MarkChatUnreadTwoTone")
  }
}

export default MarkChatUnreadTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
