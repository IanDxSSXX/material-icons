import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PersonAddAltSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15.39 14.56C13.71 13.7 11.53 13 9 13s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 1 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm11-3V6h-2v3h-3v2h3v3h2v-3h3V9h-3z\"/>")
      .name("PersonAddAltSharp")
  }
}

export default PersonAddAltSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
