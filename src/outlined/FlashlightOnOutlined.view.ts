import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class FlashlightOnOutlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M18 2H6v6l2 3v11h8V11l2-3V2zm-2 2v1H8V4h8zm-2 6.4V20h-4v-9.61l-2-3V7h8v.39l-2 3.01z\"/><circle cx=\"12\" cy=\"14\" r=\"1.5\"/>")
      .name("FlashlightOnOutlined")
  }
}

export default FlashlightOnOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
