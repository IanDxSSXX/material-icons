import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SlideshowOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M10 8v8l5-4-5-4zm9-5H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z\"/>")
      .name("SlideshowOutlined")
  }
}

export default SlideshowOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
