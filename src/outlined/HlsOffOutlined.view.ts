import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class HlsOffOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17.83 15h1.67c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1H17v-1h2v.5h1.5v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1H19v1h-2V13h-1.17l2 2zM8 10.83V15H6.5v-2.5h-2V15H3V9h1.5v2h2V9.33L1.39 4.22 2.8 2.81l18.38 18.38-1.41 1.41-7.6-7.6H10v-2.17l-2-2z\"/>")
      .name("HlsOffOutlined")
  }
}

export default HlsOffOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
