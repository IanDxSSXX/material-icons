import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class Icon18mpSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M13.5 9H15v1.5h-1.5zm0-2.5H15V8h-1.5z\"/><path d=\"M3 3v18h18V3H3zm9 2.5h4.5v6H12v-6zm-5 0h3v6H8.5V7H7V5.5zm5.5 13H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5v6zM18 17h-3v1.5h-1.5v-6H18V17z\"/><path d=\"M15 14h1.5v1.5H15z\"/>")
      .name("Icon18mpSharp")
  }
}

export default Icon18mpSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
