import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SdCardOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V8.83L10.83 4H18v16zM9 7h2v4H9zm3 0h2v4h-2zm3 0h2v4h-2z\"/>")
      .name("SdCardOutlined")
  }
}

export default SdCardOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
