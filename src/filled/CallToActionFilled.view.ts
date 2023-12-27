import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CallToActionFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3v-3h18v3z\"/>")
      .name("CallToActionFilled")
  }
}

export default CallToActionFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
