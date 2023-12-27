import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class HeightSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M13 6.99h3L12 3 8 6.99h3v10.02H8L12 21l4-3.99h-3z\"/>")
      .name("HeightSharp")
  }
}

export default HeightSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
