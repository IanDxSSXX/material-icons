import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class BungalowOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M13 14h-2v-2h2v2zm5.1 2.56L17 14.79V21H7v-6.2l-1.1 1.76-1.7-1.06L12 3l7.8 12.5-1.7 1.06zM15 11.59l-3-4.8-3 4.8V19h2v-3h2v3h2v-7.41z\"/>")
      .name("BungalowOutlined")
  }
}

export default BungalowOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
