import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class ShowChartSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m3.5 18.49 6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99l1.5 1.5z\"/>")
      .name("ShowChartSharp")
  }
}

export default ShowChartSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
