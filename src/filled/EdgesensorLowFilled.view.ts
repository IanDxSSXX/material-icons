import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class EdgesensorLowFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2 7h2v7H2V7zm18 3h2v7h-2v-7zm-4-7.99L8 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-1.99-2-1.99zM16 17H8V7h8v10z\"/>")
      .name("EdgesensorLowFilled")
  }
}

export default EdgesensorLowFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
