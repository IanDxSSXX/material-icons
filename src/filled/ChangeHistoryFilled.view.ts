import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ChangeHistoryFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 7.77 18.39 18H5.61L12 7.77M12 4 2 20h20L12 4z\"/>")
      .name("ChangeHistoryFilled")
  }
}

export default ChangeHistoryFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
