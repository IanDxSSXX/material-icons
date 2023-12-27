import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TrendingUpSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z\"/>")
      .name("TrendingUpSharp")
  }
}

export default TrendingUpSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
