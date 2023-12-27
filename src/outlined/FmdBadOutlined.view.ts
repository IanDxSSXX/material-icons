import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FmdBadOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 2c-4.2 0-8 3.22-8 8.2 0 3.32 2.67 7.25 8 11.8 5.33-4.55 8-8.48 8-11.8C20 5.22 16.2 2 12 2zm0 17.33c-4.05-3.7-6-6.79-6-9.14C6 6.57 8.65 4 12 4s6 2.57 6 6.2c0 2.34-1.95 5.44-6 9.13z\"/><path d=\"M11 6h2v5h-2zm0 7h2v2h-2z\"/>")
      .name("FmdBadOutlined")
  }
}

export default FmdBadOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
