import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Icon3kSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 3H3v18h18V3zM11 9v6H6.5v-1.5h3v-1h-2v-1h2v-1h-3V9H11zm7 6h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25 9H18l-2.25 3L18 15z\"/>")
      .name("Icon3kSharp")
  }
}

export default Icon3kSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
