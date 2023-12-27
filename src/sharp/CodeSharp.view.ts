import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CodeSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z\"/>")
      .name("CodeSharp")
  }
}

export default CodeSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
