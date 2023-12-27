import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class HourglassBottomTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m16 16.5-4-4-4 4V20h8z\" opacity=\".3\"/><path d=\"m16 16.5-4-4-4 4V20h8z\" opacity=\".3\"/><path d=\"M6 22h12v-6l-4-4 3.99-4.01L18 2H6l.01 5.99L10 12l-4 3.99V22zM8 7.5V4h8v3.5l-4 4-4-4zm0 9 4-4 4 4V20H8v-3.5z\"/>")
      .name("HourglassBottomTwoTone")
  }
}

export default HourglassBottomTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
