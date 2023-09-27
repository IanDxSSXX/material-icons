import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class ScreenshotMonitorSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M22 3H2v16h6v2h8v-2h6V3zm-2 14H4V5h16v12z\"/><path d=\"M6.5 7.5H9V6H5v4h1.5zM19 12h-1.5v2.5H15V16h4z\"/>")
      .name("ScreenshotMonitorSharp")
  }
}

export default ScreenshotMonitorSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
