import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ArrowForwardIosRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 0 0 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z\"/>")
      .name("ArrowForwardIosRound")
  }
}

export default ArrowForwardIosRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
