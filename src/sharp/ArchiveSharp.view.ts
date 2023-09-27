import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class ArchiveSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M18.71 3H5.29L3 5.79V21h18V5.79L18.71 3zM12 17.5 6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z\"/>")
      .name("ArchiveSharp")
  }
}

export default ArchiveSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
