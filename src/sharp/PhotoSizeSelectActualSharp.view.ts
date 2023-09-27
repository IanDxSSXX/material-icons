import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class PhotoSizeSelectActualSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M23 3H1v18h22V3zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z\"/>")
      .name("PhotoSizeSelectActualSharp")
  }
}

export default PhotoSizeSelectActualSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
