import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CarpenterSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7 1.5 3.11 5.39l8.13 11.67-1.41 1.41 4.24 4.24 7.07-7.07L7 1.5zm5.66 16.97 4.24-4.24 1.41 1.41-4.24 4.24-1.41-1.41z\"/>")
      .name("CarpenterSharp")
  }
}

export default CarpenterSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
