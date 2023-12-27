import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ExpandFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 20h16v2H4zM4 2h16v2H4zm9 7h3l-4-4-4 4h3v6H8l4 4 4-4h-3z\"/>")
      .name("ExpandFilled")
  }
}

export default ExpandFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
