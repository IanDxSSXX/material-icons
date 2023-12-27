import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class BungalowFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 3 4.2 15.5l1.7 1.06L7 14.8V21h4v-5h2v5h4v-6.21l1.1 1.77 1.7-1.06L12 3zm1 11h-2v-2h2v2z\"/>")
      .name("BungalowFilled")
  }
}

export default BungalowFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
