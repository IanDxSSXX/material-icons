import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class PanToolAltSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M20.18 13.4 19.1 21h-9L5 15.62l1.22-1.23 3.78.85V4.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6h1.38l5.8 2.9z\"/>")
      .name("PanToolAltSharp")
  }
}

export default PanToolAltSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>