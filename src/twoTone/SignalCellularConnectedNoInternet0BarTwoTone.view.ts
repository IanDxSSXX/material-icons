import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SignalCellularConnectedNoInternet0BarTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 18h2v-8h-2v8zm0 4h2v-2h-2v2zm-2-2v2H2L22 2v6h-2V6.83L6.83 20H18z\"/>")
      .name("SignalCellularConnectedNoInternet0BarTwoTone")
  }
}

export default SignalCellularConnectedNoInternet0BarTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
