import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LocalParkingOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z\"/>")
      .name("LocalParkingOutlined")
  }
}

export default LocalParkingOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
