import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LandscapeOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m14 6-4.22 5.63 1.25 1.67L14 9.33 19 16h-8.46l-4.01-5.37L1 18h22L14 6zM5 16l1.52-2.03L8.04 16H5z\"/>")
      .name("LandscapeOutlined")
  }
}

export default LandscapeOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
