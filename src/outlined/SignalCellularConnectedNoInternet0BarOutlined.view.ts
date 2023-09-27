import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class SignalCellularConnectedNoInternet0BarOutlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M20 18h2v-8h-2v8zm0 4h2v-2h-2v2zm-2-2v2H2L22 2v6h-2V6.83L6.83 20H18z\"/>")
      .name("SignalCellularConnectedNoInternet0BarOutlined")
  }
}

export default SignalCellularConnectedNoInternet0BarOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
