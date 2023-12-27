import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CallMergeSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17 20.41 18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z\"/>")
      .name("CallMergeSharp")
  }
}

export default CallMergeSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
