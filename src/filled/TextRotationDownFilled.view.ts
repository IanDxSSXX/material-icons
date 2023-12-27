import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TextRotationDownFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 12v-1.5L10 5.75v2.1l2.2.9v5l-2.2.9v2.1L21 12zm-7-2.62 5.02 1.87L14 13.12V9.38zM6 19.75l3-3H7V4.25H5v12.5H3l3 3z\"/>")
      .name("TextRotationDownFilled")
  }
}

export default TextRotationDownFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
