import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class FlashlightOffRound {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M18 5V4c0-1.1-.9-2-2-2H8c-.86 0-1.58.54-1.87 1.3L7.83 5H18zm-2 6 2-3V7H9.83L16 13.17zM2.1 3.51a.996.996 0 0 0 0 1.41l5.9 5.9V20c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-1.17l3.07 3.07a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0z\"/>")
      .name("FlashlightOffRound")
  }
}

export default FlashlightOffRound as Pretty as Typed<DLightIconType, HTMLSpanElement>
