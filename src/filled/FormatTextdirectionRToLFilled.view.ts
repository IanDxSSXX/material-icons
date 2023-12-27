import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FormatTextdirectionRToLFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M10 10v5h2V4h2v11h2V4h2V2h-8C7.79 2 6 3.79 6 6s1.79 4 4 4zm-2 7v-3l-4 4 4 4v-3h12v-2H8z\"/>")
      .name("FormatTextdirectionRToLFilled")
  }
}

export default FormatTextdirectionRToLFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
