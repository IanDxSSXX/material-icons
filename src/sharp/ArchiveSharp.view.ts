import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ArchiveSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18.71 3H5.29L3 5.79V21h18V5.79L18.71 3zM12 17.5 6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z\"/>")
      .name("ArchiveSharp")
  }
}

export default ArchiveSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
