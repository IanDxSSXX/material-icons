import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SaveSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17 3H3v18h18V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z\"/>")
      .name("SaveSharp")
  }
}

export default SaveSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
