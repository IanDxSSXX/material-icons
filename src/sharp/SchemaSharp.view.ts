import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SchemaSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14 9v2h-3V9H8.5V7H11V1H4v6h2.5v2H4v6h2.5v2H4v6h7v-6H8.5v-2H11v-2h3v2h7V9h-7z\"/>")
      .name("SchemaSharp")
  }
}

export default SchemaSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
