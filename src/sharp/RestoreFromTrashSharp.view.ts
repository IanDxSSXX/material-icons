import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class RestoreFromTrashSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6 21h12V7H6v14zm6-11 4 4h-2v4h-4v-4H8l4-4zm3.5-6-1-1h-5l-1 1H5v2h14V4z\"/>")
      .name("RestoreFromTrashSharp")
  }
}

export default RestoreFromTrashSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
