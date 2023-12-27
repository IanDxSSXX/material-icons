import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LandscapeSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m14 6-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z\"/>")
      .name("LandscapeSharp")
  }
}

export default LandscapeSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
