import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DirectionsBusFilledSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 2c-4 0-8 .5-8 4v9.5c0 .95.38 1.81 1 2.44V21h3v-2h8v2h3v-3.06c.62-.63 1-1.49 1-2.44V6c0-3.5-3.58-4-8-4zM8.5 16c-.83 0-1.5-.67-1.5-1.5S7.67 13 8.5 13s1.5.67 1.5 1.5S9.33 16 8.5 16zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm2.5-6H6V7h12v3z\"/>")
      .name("DirectionsBusFilledSharp")
  }
}

export default DirectionsBusFilledSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
