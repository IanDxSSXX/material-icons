import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Icon3pSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2 2v20l4-4h16V2H2zm10 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8H8v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 16 13.43V14z\"/>")
      .name("Icon3pSharp")
  }
}

export default Icon3pSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
