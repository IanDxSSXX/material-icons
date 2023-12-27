import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DarkModeSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z\"/>")
      .name("DarkModeSharp")
  }
}

export default DarkModeSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
