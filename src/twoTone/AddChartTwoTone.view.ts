import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class AddChartTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M11 7h2v10h-2zm4 6h2v4h-2z\"/><path d=\"M19 19H5V5h9V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2v9z\"/><path d=\"M7 10h2v7H7zm12-5V3h-2v2h-2v2h2v2h2V7h2V5z\"/>")
      .name("AddChartTwoTone")
  }
}

export default AddChartTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
