import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class FlashlightOnTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m8 7.39 2 3V20h4v-9.6l2-3.01V7H8v.39zm4 5.11c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM8 4h8v1H8z\" opacity=\".3\"/><path d=\"M6 2v6l2 3v11h8V11l2-3V2H6zm10 5.39-2 3.01V20h-4v-9.61l-2-3V7h8v.39zM16 5H8V4h8v1z\"/><circle cx=\"12\" cy=\"14\" r=\"1.5\"/>")
      .name("FlashlightOnTwoTone")
  }
}

export default FlashlightOnTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
