import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class KeyboardCapslockSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 8.41 16.59 13 18 11.59l-6-6-6 6L7.41 13 12 8.41zM6 18h12v-2H6v2z\"/>")
      .name("KeyboardCapslockSharp")
  }
}

export default KeyboardCapslockSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
