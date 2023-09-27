import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class Icon8kPlusSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M7.5 12.5h1V14h-1v-1.5zm0-2.5h1v1.5h-1V10zM21 3H3v18h18V3zM10 14c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v4zm6 1h-1.75l-1.75-2.25V15H11V9h1.5v2.25L14.25 9H16l-2.25 3L16 15zm3-2.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19v1z\"/>")
      .name("Icon8kPlusSharp")
  }
}

export default Icon8kPlusSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
