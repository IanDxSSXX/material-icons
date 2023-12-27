import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class BedtimeSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12.34 2.02C6.59 1.82 2 6.42 2 12c0 5.52 4.48 10 10 10 3.71 0 6.93-2.02 8.66-5.02-7.51-.25-12.09-8.43-8.32-14.96z\"/>")
      .name("BedtimeSharp")
  }
}

export default BedtimeSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
