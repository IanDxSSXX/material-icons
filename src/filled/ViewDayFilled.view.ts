import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ViewDayFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z\"/>")
      .name("ViewDayFilled")
  }
}

export default ViewDayFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
