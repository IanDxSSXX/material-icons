import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SignalCellular4BarRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4.41 22H20c1.1 0 2-.9 2-2V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71z\"/>")
      .name("SignalCellular4BarRound")
  }
}

export default SignalCellular4BarRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
