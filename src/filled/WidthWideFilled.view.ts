import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class WidthWideFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h2v12H4V6zm16 12h-2V6h2v12z\"/>")
      .name("WidthWideFilled")
  }
}

export default WidthWideFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
