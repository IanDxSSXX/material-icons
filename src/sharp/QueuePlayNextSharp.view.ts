import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class QueuePlayNextSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M23 3H1v16h7v2h8v-2h2v-2H3V5h18v8h2V3zm-10 7V7h-2v3H8v2h3v3h2v-3h3v-2h-3zm11 8-4.5 4.5L18 21l3-3-3-3 1.5-1.5L24 18z\"/>")
      .name("QueuePlayNextSharp")
  }
}

export default QueuePlayNextSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
