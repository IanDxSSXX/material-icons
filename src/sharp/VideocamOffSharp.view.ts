import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class VideocamOffSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 16.61V6.5l-4 4V6h-6.61zM3.41 1.86 2 3.27 4.73 6H3v12h13.73l3 3 1.41-1.41z\"/>")
      .name("VideocamOffSharp")
  }
}

export default VideocamOffSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
