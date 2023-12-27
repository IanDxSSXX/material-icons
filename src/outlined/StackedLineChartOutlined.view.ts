import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class StackedLineChartOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m2 19.99 7.5-7.51 4 4 7.09-7.97L22 9.92l-8.5 9.56-4-4-6 6.01-1.5-1.5zm1.5-4.5 6-6.01 4 4L22 3.92l-1.41-1.41-7.09 7.97-4-4L2 13.99l1.5 1.5z\"/>")
      .name("StackedLineChartOutlined")
  }
}

export default StackedLineChartOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
