import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CropLandscapeSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 5H3v14h18V5zm-2 12H5V7h14v10z\"/>")
      .name("CropLandscapeSharp")
  }
}

export default CropLandscapeSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
