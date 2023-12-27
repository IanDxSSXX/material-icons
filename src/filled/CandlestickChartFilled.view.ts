import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CandlestickChartFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M9 4H7v2H5v12h2v2h2v-2h2V6H9zm10 4h-2V4h-2v4h-2v7h2v5h2v-5h2z\"/>")
      .name("CandlestickChartFilled")
  }
}

export default CandlestickChartFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
