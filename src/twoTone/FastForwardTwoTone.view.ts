import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FastForwardTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15 9.86v4.28L18.03 12zm-9 0v4.28L9.03 12z\" opacity=\".3\"/><path d=\"m4 18 8.5-6L4 6v12zm2-8.14L9.03 12 6 14.14V9.86zM21.5 12 13 6v12l8.5-6zM15 9.86 18.03 12 15 14.14V9.86z\"/>")
      .name("FastForwardTwoTone")
  }
}

export default FastForwardTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
