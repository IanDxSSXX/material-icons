import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class NavigateBeforeRound {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M14.91 6.71a.996.996 0 0 0-1.41 0L8.91 11.3a.996.996 0 0 0 0 1.41l4.59 4.59a.996.996 0 1 0 1.41-1.41L11.03 12l3.88-3.88c.38-.39.38-1.03 0-1.41z\"/>")
      .name("NavigateBeforeRound")
  }
}

export default NavigateBeforeRound as Pretty as Typed<DLightIconType, HTMLSpanElement>
