import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MarkunreadMailboxOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 6H10v2h10v12H4V8h2v4h2V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z\"/>")
      .name("MarkunreadMailboxOutlined")
  }
}

export default MarkunreadMailboxOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
