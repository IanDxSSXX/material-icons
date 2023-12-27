import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SignalWifiConnectedNoInternet4Filled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M24 8.98A16.88 16.88 0 0 0 12 4C7.31 4 3.07 5.9 0 8.98L12 21v-9h8.99L24 8.98zM19.59 14l-2.09 2.09L15.41 14 14 15.41l2.09 2.09L14 19.59 15.41 21l2.09-2.08L19.59 21 21 19.59l-2.08-2.09L21 15.41 19.59 14z\"/>")
      .name("SignalWifiConnectedNoInternet4Filled")
  }
}

export default SignalWifiConnectedNoInternet4Filled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
