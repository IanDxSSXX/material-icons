import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Icon5gSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17 13h2v2h-5V9h7V7h-9v10h9v-6h-4zM3 13h5v2H3v2h7v-6H5V9h5V7H3z\"/>")
      .name("Icon5gSharp")
  }
}

export default Icon5gSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
