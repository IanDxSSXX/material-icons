import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class QuickreplyFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h9v-8h7V4z\"/><path d=\"M22.5 16h-2.2l1.7-4h-5v6h2v5z\"/>")
      .name("QuickreplyFilled")
  }
}

export default QuickreplyFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
