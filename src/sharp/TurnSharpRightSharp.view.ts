import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TurnSharpRightSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m18 6.83 1.59 1.58L21 7l-4-4-4 4 1.41 1.41L16 6.83V13H6v8h2v-6h10z\"/>")
      .name("TurnSharpRightSharp")
  }
}

export default TurnSharpRightSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
