import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PhonelinkSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 6h18V4H2v13H0v3h14v-3H4V6zm20 2h-8v12h8V8zm-2 9h-4v-7h4v7z\"/>")
      .name("PhonelinkSharp")
  }
}

export default PhonelinkSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
