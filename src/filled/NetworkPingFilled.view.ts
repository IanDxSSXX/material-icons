import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class NetworkPingFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M12 14.67 3.41 6.09 2 7.5l8.5 8.5H4v2h16v-2h-6.5l5.15-5.15A2.5 2.5 0 1 0 19.5 6 2.5 2.5 0 0 0 17 8.5c0 .35.07.67.2.97l-5.2 5.2z\"/>")
      .name("NetworkPingFilled")
  }
}

export default NetworkPingFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>
