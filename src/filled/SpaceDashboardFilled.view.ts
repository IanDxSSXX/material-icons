import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class SpaceDashboardFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M11 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h6v18zm2 0h6c1.1 0 2-.9 2-2v-7h-8v9zm8-11V5c0-1.1-.9-2-2-2h-6v7h8z\"/>")
      .name("SpaceDashboardFilled")
  }
}

export default SpaceDashboardFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>
