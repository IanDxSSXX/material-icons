import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SwipeUpAltTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<circle cx=\"12\" cy=\"15\" r=\"3\" opacity=\".3\"/><path d=\"m13 5.83 1.59 1.59L16 6l-4-4-4 4 1.41 1.41L11 5.83v4.27a5 5 0 1 0 2 0V5.83zM12 18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z\"/>")
      .name("SwipeUpAltTwoTone")
  }
}

export default SwipeUpAltTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
