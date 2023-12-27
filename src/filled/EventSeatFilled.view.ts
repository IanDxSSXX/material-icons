import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class EventSeatFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 18v3h3v-3h10v3h3v-6H4v3zm15-8h3v3h-3v-3zM2 10h3v3H2v-3zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z\"/>")
      .name("EventSeatFilled")
  }
}

export default EventSeatFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
