import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class PersonPinSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M21 2H3v18h6l3 3 3-3h6V2zm-9 3.3c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7S9.3 9.49 9.3 8s1.21-2.7 2.7-2.7zM18 16H6v-.9c0-2 4-3.1 6-3.1s6 1.1 6 3.1v.9z\"/>")
      .name("PersonPinSharp")
  }
}

export default PersonPinSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
