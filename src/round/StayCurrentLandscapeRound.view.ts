import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class StayCurrentLandscapeRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M1.01 7 1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2zM19 7v10H5V7h14z\"/>")
      .name("StayCurrentLandscapeRound")
  }
}

export default StayCurrentLandscapeRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
