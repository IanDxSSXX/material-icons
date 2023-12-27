import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class HouseOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 9.3V4h-3v2.6L12 3 2 12h3v8h6v-6h2v6h6v-8h3l-3-2.7zM17 18h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z\"/><path d=\"M10 10h4c0-1.1-.9-2-2-2s-2 .9-2 2z\"/>")
      .name("HouseOutlined")
  }
}

export default HouseOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
