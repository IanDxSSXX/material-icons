import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FlakySharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path fill-rule=\"evenodd\" d=\"m14.05 17.58-.01.01-2.4-2.4 1.06-1.06 1.35 1.35L16.54 13l1.06 1.06-3.54 3.54-.01-.02zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM7.34 6.28l1.41 1.41 1.41-1.41 1.06 1.06-1.41 1.41 1.41 1.41-1.06 1.06-1.41-1.41-1.41 1.41-1.06-1.06 1.41-1.41-1.41-1.41 1.06-1.06zM12 20c-2.2 0-4.2-.9-5.7-2.3L17.7 6.3C19.1 7.8 20 9.8 20 12c0 4.4-3.6 8-8 8z\"/>")
      .name("FlakySharp")
  }
}

export default FlakySharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
