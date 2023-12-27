import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class KeyboardArrowRightTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z\"/>")
      .name("KeyboardArrowRightTwoTone")
  }
}

export default KeyboardArrowRightTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
