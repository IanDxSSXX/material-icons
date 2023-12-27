import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class WarningAmberTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M1 21h22L12 2 1 21zm3.47-2L12 5.99 19.53 19H4.47zM11 16h2v2h-2zm0-6h2v4h-2z\"/>")
      .name("WarningAmberTwoTone")
  }
}

export default WarningAmberTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
