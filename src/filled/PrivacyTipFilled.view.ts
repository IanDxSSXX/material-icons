import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PrivacyTipFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v6h-2v-6z\"/>")
      .name("PrivacyTipFilled")
  }
}

export default PrivacyTipFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
