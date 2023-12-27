import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class KitchenSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 2.01 4 2v20h16V2.01zM18 20H6v-9.02h12V20zm0-11H6V4h12v5zM8 5h2v3H8V5zm0 7h2v5H8v-5z\"/>")
      .name("KitchenSharp")
  }
}

export default KitchenSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
