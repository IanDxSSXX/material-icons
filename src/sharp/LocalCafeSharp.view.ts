import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LocalCafeSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 3H4v14h14v-7h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 5h-2V5h2v3zM2 21h18v-2H2v2z\"/>")
      .name("LocalCafeSharp")
  }
}

export default LocalCafeSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
