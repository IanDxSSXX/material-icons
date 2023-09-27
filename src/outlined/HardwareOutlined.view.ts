import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class HardwareOutlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m18 3-3 3V3H9C6.24 3 4 5.24 4 8h5v12c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V8l3 3h2V3h-2zm-5 16h-2v-6h2v6zm-2-8V6H6.77C7.32 5.39 8.11 5 9 5h4v6h-2z\"/>")
      .name("HardwareOutlined")
  }
}

export default HardwareOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
