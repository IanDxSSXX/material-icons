import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SkipNextFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m6 18 8.5-6L6 6v12zM16 6v12h2V6h-2z\"/>")
      .name("SkipNextFilled")
  }
}

export default SkipNextFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
