import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class AreaChartFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M3 13v7h18v-1.5l-9-7L8 17l-5-4zm0-6 4 3 5-7 5 4h4v8.97l-9.4-7.31-3.98 5.48L3 10.44V7z\"/>")
      .name("AreaChartFilled")
  }
}

export default AreaChartFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>
