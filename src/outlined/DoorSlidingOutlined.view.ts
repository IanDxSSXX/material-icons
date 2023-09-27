import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class DoorSlidingOutlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M10 13H8v-2h2v2zm6-2h-2v2h2v-2zm5 8v2H3v-2h1V5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v14h1zM11 5H6v14h5V5zm7 0h-5v14h5V5z\"/>")
      .name("DoorSlidingOutlined")
  }
}

export default DoorSlidingOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
