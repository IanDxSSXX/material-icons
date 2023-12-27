import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PieChartSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z\"/>")
      .name("PieChartSharp")
  }
}

export default PieChartSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
