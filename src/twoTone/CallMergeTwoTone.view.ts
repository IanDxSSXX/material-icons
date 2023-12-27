import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CallMergeTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m16.997 20.41-3.408-3.407 1.4-1.407 3.41 3.408zM5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8H11v5.59z\"/>")
      .name("CallMergeTwoTone")
  }
}

export default CallMergeTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
