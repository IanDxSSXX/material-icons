import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class Icon2kPlusSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M21 3H3v18h18V3zm-11 9.5H7.5v1H10V15H6v-3.5h2.5v-1H6V9h4v3.5zm4.25 2.5-1.75-2.25V15H11V9h1.5v2.25L14.25 9H16l-2.25 3L16 15h-1.75zM19 12.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19v1z\"/>")
      .name("Icon2kPlusSharp")
  }
}

export default Icon2kPlusSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
