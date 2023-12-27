import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class GridViewSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 3h8v8H3zm0 10h8v8H3zM13 3h8v8h-8zm0 10h8v8h-8z\"/>")
      .name("GridViewSharp")
  }
}

export default GridViewSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
