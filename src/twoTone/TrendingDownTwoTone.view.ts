import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TrendingDownTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m16 18 2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6h-6z\"/>")
      .name("TrendingDownTwoTone")
  }
}

export default TrendingDownTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
