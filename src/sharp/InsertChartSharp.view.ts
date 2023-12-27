import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class InsertChartSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 3H3v18h18V3zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z\"/>")
      .name("InsertChartSharp")
  }
}

export default InsertChartSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
