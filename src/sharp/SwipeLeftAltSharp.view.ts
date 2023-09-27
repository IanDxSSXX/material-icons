import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class SwipeLeftAltSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M10.1 13a5 5 0 1 0 0-2H5.83l1.59-1.59L6 8l-4 4 4 4 1.41-1.41L5.83 13h4.27z\"/>")
      .name("SwipeLeftAltSharp")
  }
}

export default SwipeLeftAltSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
