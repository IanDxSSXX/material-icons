import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class SignalWifiOffRound {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M23.64 7c-.45-.34-4.93-4-11.64-4-1.32 0-2.55.14-3.69.38L18.43 13.5 23.64 7zM4.12 2.01a.996.996 0 1 0-1.41 1.41l1.35 1.35C1.91 5.76.59 6.82.36 7l10.08 12.56c.8 1 2.32 1 3.12 0l2.35-2.93 2.61 2.61a.996.996 0 1 0 1.41-1.41L4.12 2.01z\"/>")
      .name("SignalWifiOffRound")
  }
}

export default SignalWifiOffRound as Pretty as Typed<DLightIconType, HTMLSpanElement>
