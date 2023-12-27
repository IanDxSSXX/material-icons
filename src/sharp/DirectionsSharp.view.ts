import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DirectionsSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22.41 12 12 1.59 1.59 11.99 12 22.41 22.41 12zM14 14.5V12h-4v3H8v-5h6V7.5l3.5 3.5-3.5 3.5z\"/>")
      .name("DirectionsSharp")
  }
}

export default DirectionsSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
