import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TurnSlightLeftSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M11.66 6V4H6v5.66h2V7.41l5 5V20h2v-8.41L9.41 6z\"/>")
      .name("TurnSlightLeftSharp")
  }
}

export default TurnSlightLeftSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
