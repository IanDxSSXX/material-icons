import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class AlignVerticalCenterRound {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M21 11h-4V7.5c0-.83-.67-1.5-1.5-1.5S14 6.67 14 7.5V11h-4V4.5C10 3.67 9.33 3 8.5 3S7 3.67 7 4.5V11H2.84c-.55 0-1 .45-1 1s.45 1 1 1H7v6.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V13h4v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V13h4c.55 0 1-.45 1-1s-.45-1-1-1z\"/>")
      .name("AlignVerticalCenterRound")
  }
}

export default AlignVerticalCenterRound as Pretty as Typed<DLightIconType, HTMLSpanElement>
