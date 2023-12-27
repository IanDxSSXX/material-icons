import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CenterFocusStrongSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-7 7H3v6h6v-2H5v-4zM5 5h4V3H3v6h2V5zm16-2h-6v2h4v4h2V3zm-2 16h-4v2h6v-6h-2v4z\"/>")
      .name("CenterFocusStrongSharp")
  }
}

export default CenterFocusStrongSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
