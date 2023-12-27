import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SquareRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2z\"/>")
      .name("SquareRound")
  }
}

export default SquareRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
