import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LaptopMacSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m20 18 1.99-2L22 3H2v13l2 2H0v2h24v-2h-4zM4 5h16v11H4V5zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z\"/>")
      .name("LaptopMacSharp")
  }
}

export default LaptopMacSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
