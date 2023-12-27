import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class KeyboardDoubleArrowDownTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z\"/><path d=\"m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z\"/>")
      .name("KeyboardDoubleArrowDownTwoTone")
  }
}

export default KeyboardDoubleArrowDownTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
