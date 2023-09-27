import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class BrushSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm14.41-8.66-2.75-2.75L9 12.25 11.75 15l9.66-9.66z\"/>")
      .name("BrushSharp")
  }
}

export default BrushSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
