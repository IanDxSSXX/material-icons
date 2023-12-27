import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class OutputSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m17 17 5-5-5-5-1.41 1.41L18.17 11H9v2h9.17l-2.58 2.59z\"/><path d=\"M19 19H5V5h14v2h2V3H3v18h18v-4h-2z\"/>")
      .name("OutputSharp")
  }
}

export default OutputSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
