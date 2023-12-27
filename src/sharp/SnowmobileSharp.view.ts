import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SnowmobileSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 17c0 .55-.45 1-1 1h-.17l-2.2-2.2C21.6 15.18 23 13 23 13l-9-8h-3v2h2.25l1.45 1.3L11 11l-9.5-1L0 13l4.54 1.36-3.49 1.88C-.77 17.22-.07 20 2 20h6c2.21 0 4-1.79 4-4h4l2 2h-3v2h6c1.66 0 3-1.34 3-3h-2zM8 18H2l5.25-2.83L10 16a2 2 0 0 1-2 2z\"/>")
      .name("SnowmobileSharp")
  }
}

export default SnowmobileSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
