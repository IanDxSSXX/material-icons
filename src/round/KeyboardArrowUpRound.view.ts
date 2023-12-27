import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class KeyboardArrowUpRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M8.12 14.71 12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z\"/>")
      .name("KeyboardArrowUpRound")
  }
}

export default KeyboardArrowUpRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
