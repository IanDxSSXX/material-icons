import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class OndemandVideoSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M23 3H1v16h7v2h8v-2h6.99L23 3zm-2 14H3V5h18v12zm-5-6-7 4V7l7 4z\"/>")
      .name("OndemandVideoSharp")
  }
}

export default OndemandVideoSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
