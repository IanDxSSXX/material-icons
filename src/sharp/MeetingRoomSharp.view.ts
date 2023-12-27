import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MeetingRoomSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14 6v15H3v-2h2V3h9v1h5v15h2v2h-4V6h-3zm-4 5v2h2v-2h-2z\"/>")
      .name("MeetingRoomSharp")
  }
}

export default MeetingRoomSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
