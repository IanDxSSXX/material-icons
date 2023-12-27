import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class IosShareSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 8h-5v2h3v11H6V10h3V8H4v15h16z\"/><path d=\"M11 16h2V5h3l-4-4-4 4h3z\"/>")
      .name("IosShareSharp")
  }
}

export default IosShareSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
