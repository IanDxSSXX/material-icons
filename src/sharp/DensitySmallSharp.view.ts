import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class DensitySmallSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M3 2h18v2H3zm0 18h18v2H3zm0-6h18v2H3zm0-6h18v2H3z\"/>")
      .name("DensitySmallSharp")
  }
}

export default DensitySmallSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>