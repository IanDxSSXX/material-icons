import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SignalCellularNodataRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 13h-7c-1.1 0-2 .9-2 2v7H4.41c-.89 0-1.34-1.08-.71-1.71L20.29 3.71c.63-.63 1.71-.19 1.71.7V13zm-1.7 1.71a.996.996 0 0 0-1.41 0L17.5 16.1l-1.39-1.39a.996.996 0 1 0-1.41 1.41l1.39 1.39-1.39 1.39a.996.996 0 1 0 1.41 1.41l1.39-1.38 1.39 1.38a.996.996 0 1 0 1.41-1.41l-1.38-1.39 1.38-1.39a.996.996 0 0 0 0-1.41z\"/>")
      .name("SignalCellularNodataRound")
  }
}

export default SignalCellularNodataRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
