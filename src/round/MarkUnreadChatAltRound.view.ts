import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class MarkUnreadChatAltRound {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<circle cx=\"19\" cy=\"3\" r=\"3\"/><path d=\"M7 8c-.55 0-1-.45-1-1s.45-1 1-1h8.03a4.906 4.906 0 0 1-.92-4H4.01a2 2 0 0 0-2 2L2 19.58c0 .89 1.08 1.34 1.71.71L6 18h14c1.1 0 2-.9 2-2V6.97C21.16 7.61 20.13 8 19 8H7zm6 6H7c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1zm4-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z\"/>")
      .name("MarkUnreadChatAltRound")
  }
}

export default MarkUnreadChatAltRound as Pretty as Typed<DLightIconType, HTMLSpanElement>
