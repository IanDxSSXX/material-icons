import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Crop75TwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z\"/>")
      .name("Crop75TwoTone")
  }
}

export default Crop75TwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
