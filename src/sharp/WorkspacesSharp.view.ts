import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class WorkspacesSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6 13c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm6-10C9.8 3 8 4.8 8 7s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm6 10c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z\"/>")
      .name("WorkspacesSharp")
  }
}

export default WorkspacesSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
