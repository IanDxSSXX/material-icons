import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class KeyboardControlKeyRound {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M5.71 12.71c.39.39 1.02.39 1.41 0L12 7.83l4.88 4.88a.996.996 0 1 0 1.41-1.41L12.7 5.71a.996.996 0 0 0-1.41 0L5.7 11.3c-.38.38-.38 1.02.01 1.41z\"/>")
      .name("KeyboardControlKeyRound")
  }
}

export default KeyboardControlKeyRound as Pretty as Typed<DLightIconType, HTMLSpanElement>
