import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Icon7mpSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15 14h1.5v1.5H15z\"/><path d=\"M3 3v18h18V3H3zm9.5 15.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5v6zm-1.25-7L12.62 7H10V5.5h4.87l-1.87 6h-1.75zM18 17h-3v1.5h-1.5v-6H18V17z\"/>")
      .name("Icon7mpSharp")
  }
}

export default Icon7mpSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
