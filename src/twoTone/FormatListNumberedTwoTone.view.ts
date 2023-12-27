import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FormatListNumberedTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 13H3.2L5 10.9V10H2v1h1.8L2 13.1v.9h3zm2-8h14v2H7zM5 16H2v1h2v.5H3v1h1v.5H2v1h3zm2 1h14v2H7zM3 8h1V4H2v1h1zm4 3h14v2H7z\"/>")
      .name("FormatListNumberedTwoTone")
  }
}

export default FormatListNumberedTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
