import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SmartDisplayOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M9.5 7.5v9l7-4.5z\"/><path d=\"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14.01H4V5.99h16v12.02z\"/>")
      .name("SmartDisplayOutlined")
  }
}

export default SmartDisplayOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
