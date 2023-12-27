import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FlagSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z\"/>")
      .name("FlagSharp")
  }
}

export default FlagSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
