import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class WarningSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z\"/>")
      .name("WarningSharp")
  }
}

export default WarningSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
