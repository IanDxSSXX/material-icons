import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FeaturedPlayListFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 8H3V9h9v2zm0-4H3V5h9v2z\"/>")
      .name("FeaturedPlayListFilled")
  }
}

export default FeaturedPlayListFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
