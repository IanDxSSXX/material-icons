import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class SignalWifi4BarOutlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M12.01 21.49 23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z\"/>")
      .name("SignalWifi4BarOutlined")
  }
}

export default SignalWifi4BarOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
