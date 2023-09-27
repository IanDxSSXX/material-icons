import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class WbIridescentOutlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M5 15h14V9H5v6zm2-4h10v2H7v-2zm4-10h2v3h-2zm9.46 4.01L19.04 3.6l-1.79 1.79 1.41 1.41zM11 20h2v3h-2zm6.24-1.29 1.79 1.8 1.42-1.42-1.8-1.79zM4.96 3.595l1.788 1.79L5.34 6.79 3.553 5.003zM3.55 19.08l1.41 1.42 1.79-1.8-1.41-1.41z\"/>")
      .name("WbIridescentOutlined")
  }
}

export default WbIridescentOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
