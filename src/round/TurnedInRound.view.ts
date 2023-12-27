import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TurnedInRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z\"/>")
      .name("TurnedInRound")
  }
}

export default TurnedInRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
