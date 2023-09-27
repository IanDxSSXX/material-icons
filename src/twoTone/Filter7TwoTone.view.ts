import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class Filter7TwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M7 17h14V3H7v14zm4-10V5h6v2l-4 8h-2l4-8h-4z\" opacity=\".3\"/><path d=\"M3 23h16v-2H3V5H1v16c0 1.1.9 2 2 2zm10-8 4-8V5h-6v2h4l-4 8zm8-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z\"/>")
      .name("Filter7TwoTone")
  }
}

export default Filter7TwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>