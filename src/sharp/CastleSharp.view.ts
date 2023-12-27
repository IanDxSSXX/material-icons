import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CastleSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 9v2h-2V3h-2v2h-2V3h-2v2h-2V3H9v2H7V3H5v8H3V9H1v12h9v-5h4v5h9V9h-2zm-10 3H9V9h2v3zm4 0h-2V9h2v3z\"/>")
      .name("CastleSharp")
  }
}

export default CastleSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
