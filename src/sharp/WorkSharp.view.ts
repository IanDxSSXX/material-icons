import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class WorkSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 6h-6V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H2v15h20V6zm-8 0h-4V4h4v2z\"/>")
      .name("WorkSharp")
  }
}

export default WorkSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
