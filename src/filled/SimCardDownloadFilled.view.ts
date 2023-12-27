import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SimCardDownloadFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 15-4-4h3V9.02L13 9v4h3l-4 4z\"/>")
      .name("SimCardDownloadFilled")
  }
}

export default SimCardDownloadFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
