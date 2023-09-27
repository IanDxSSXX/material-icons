import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class SmartDisplayTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M4 18.01h16V5.99H4v12.02zM9.5 7.5l7 4.5-7 4.5v-9z\" opacity=\".3\"/><path d=\"M9.5 7.5v9l7-4.5z\"/><path d=\"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14.01H4V5.99h16v12.02z\"/>")
      .name("SmartDisplayTwoTone")
  }
}

export default SmartDisplayTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
