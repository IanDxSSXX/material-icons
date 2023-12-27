import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class KeyboardTabTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M11.59 7.41 15.17 11H1v2h14.17l-3.59 3.59L13 18l6-6-6-6-1.41 1.41zM20 6v12h2V6h-2z\"/>")
      .name("KeyboardTabTwoTone")
  }
}

export default KeyboardTabTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
