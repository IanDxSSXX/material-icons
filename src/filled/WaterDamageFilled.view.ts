import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class WaterDamageFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M12 3 2 12h3v8h14v-8h3L12 3zm0 13c-1.1 0-2-.9-2-2s2-4 2-4 2 2.9 2 4-.9 2-2 2z\"/>")
      .name("WaterDamageFilled")
  }
}

export default WaterDamageFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>
