import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class MarginTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M5 19h14V5H5v14zM15 7h2v2h-2V7zm0 4h2v2h-2v-2zm-4-4h2v2h-2V7zm0 4h2v2h-2v-2zM7 7h2v2H7V7zm0 4h2v2H7v-2z\" opacity=\".3\"/><path d=\"M7 7h2v2H7zm0 4h2v2H7z\"/><path d=\"M3 3v18h18V3H3zm16 16H5V5h14v14z\"/><path d=\"M11 7h2v2h-2zm4 4h2v2h-2zm-4 0h2v2h-2zm4-4h2v2h-2z\"/>")
      .name("MarginTwoTone")
  }
}

export default MarginTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
