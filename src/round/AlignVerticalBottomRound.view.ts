import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class AlignVerticalBottomRound {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M21 22H3c-.55 0-1-.45-1-1s.45-1 1-1h18c.55 0 1 .45 1 1s-.45 1-1 1zM8.5 2C7.67 2 7 2.67 7 3.5v13c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-13C10 2.67 9.33 2 8.5 2zm7 6c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5z\"/>")
      .name("AlignVerticalBottomRound")
  }
}

export default AlignVerticalBottomRound as Pretty as Typed<DLightIconType, HTMLSpanElement>
