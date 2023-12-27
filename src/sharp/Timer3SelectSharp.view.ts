import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Timer3SelectSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 11v2h-4v1h4v5h-6v-2h4v-1h-4v-5h6zM4 5v3h6v2.5H4v3h6V16H4v3h9V5H4z\"/>")
      .name("Timer3SelectSharp")
  }
}

export default Timer3SelectSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
