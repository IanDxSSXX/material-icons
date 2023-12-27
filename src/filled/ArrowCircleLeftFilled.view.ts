import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ArrowCircleLeftFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12zm10-1h4v2h-4v3l-4-4 4-4v3z\"/>")
      .name("ArrowCircleLeftFilled")
  }
}

export default ArrowCircleLeftFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
