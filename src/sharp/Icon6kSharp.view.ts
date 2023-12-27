import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Icon6kSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M8 12.5h1.5V14H8v-1.5zM21 3H3v18h18V3zm-10 7.5H8v1h3V15H6.5V9H11v1.5zm7 4.5h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25 9H18l-2.25 3L18 15z\"/>")
      .name("Icon6kSharp")
  }
}

export default Icon6kSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
