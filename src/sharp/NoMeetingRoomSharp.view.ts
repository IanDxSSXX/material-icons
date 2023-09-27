import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class NoMeetingRoomSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M14 6h3v7.88l2 2V4h-5V3H6.12L14 10.88zm-2 5.71V13h-2v-2h1.29L2.41 2.13 1 3.54l4 4V19H3v2h11v-4.46L20.46 23l1.41-1.41z\"/>")
      .name("NoMeetingRoomSharp")
  }
}

export default NoMeetingRoomSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
