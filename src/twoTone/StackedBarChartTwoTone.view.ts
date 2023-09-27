import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class StackedBarChartTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M4 9h4v11H4zm0-5h4v4H4zm6 3h4v4h-4zm6 3h4v4h-4zm0 5h4v5h-4zm-6-3h4v8h-4z\"/>")
      .name("StackedBarChartTwoTone")
  }
}

export default StackedBarChartTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
