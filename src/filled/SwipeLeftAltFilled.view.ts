import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SwipeLeftAltFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M10.1 13a5 5 0 1 0 0-2H5.83l1.59-1.59L6 8l-4 4 4 4 1.41-1.41L5.83 13h4.27z\"/>")
      .name("SwipeLeftAltFilled")
  }
}

export default SwipeLeftAltFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
