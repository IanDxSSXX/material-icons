import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ChangeHistoryRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 7.77 18.39 18H5.61L12 7.77m-.85-2.41-8.2 13.11c-.41.67.07 1.53.85 1.53h16.4a1 1 0 0 0 .85-1.53l-8.2-13.11a1 1 0 0 0-1.7 0z\"/>")
      .name("ChangeHistoryRound")
  }
}

export default ChangeHistoryRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
