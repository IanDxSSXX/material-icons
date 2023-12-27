import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AodFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 18H7V6h10v12zm-9-8h8v1.5H8V10zm1 3h6v1.5H9V13z\"/>")
      .name("AodFilled")
  }
}

export default AodFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
