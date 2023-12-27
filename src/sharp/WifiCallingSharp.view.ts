import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class WifiCallingSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M13.21 17.37a15.045 15.045 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51l-5.27-.61-2.52 2.52z\"/><path d=\"M22 4.95C21.79 4.78 19.67 3 16.5 3c-3.18 0-5.29 1.78-5.5 1.95L16.5 12 22 4.95z\"/>")
      .name("WifiCallingSharp")
  }
}

export default WifiCallingSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
