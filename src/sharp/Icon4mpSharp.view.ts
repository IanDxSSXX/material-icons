import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class Icon4mpSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M15 14h1.5v1.5H15z\"/><path d=\"M3 3v18h18V3H3zm9.5 15.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5v6zm-3-8.5V5.5H11v3h1.5v-3H14v3h1V10h-1v1.5h-1.5V10h-3zm8.5 7h-3v1.5h-1.5v-6H18V17z\"/>")
      .name("Icon4mpSharp")
  }
}

export default Icon4mpSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
