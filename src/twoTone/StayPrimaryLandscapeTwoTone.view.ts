import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class StayPrimaryLandscapeTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M5 7h14v10H5z\" opacity=\".3\"/><path d=\"M21 5H3c-1.1 0-1.99.9-1.99 2L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-2 12H5V7h14v10z\"/>")
      .name("StayPrimaryLandscapeTwoTone")
  }
}

export default StayPrimaryLandscapeTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
