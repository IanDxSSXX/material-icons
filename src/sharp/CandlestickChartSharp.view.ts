import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class CandlestickChartSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M9 4H7v2H5v12h2v2h2v-2h2V6H9zm10 4h-2V4h-2v4h-2v7h2v5h2v-5h2z\"/>")
      .name("CandlestickChartSharp")
  }
}

export default CandlestickChartSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
