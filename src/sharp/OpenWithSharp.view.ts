import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class OpenWithSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z\"/>")
      .name("OpenWithSharp")
  }
}

export default OpenWithSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
