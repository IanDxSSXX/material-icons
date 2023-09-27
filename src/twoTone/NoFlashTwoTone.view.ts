import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class NoFlashTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m13.42 16.24 2.55 2.55-.01 1.21H4v-8.6h3.02l.59-.65.15-.16 1.5 1.5A3.486 3.486 0 0 0 6.5 15.5c0 1.93 1.57 3.5 3.5 3.5 1.68 0 3.07-1.18 3.42-2.76zM16 13.17V11.4h-1.77L16 13.17z\" opacity=\".3\"/><path d=\"M20.4 5.6H22L19 11V7h-1V2h4l-1.6 3.6zM16 11.4v1.77l2 2V11c0-.88-.72-1.6-1.6-1.6h-2.54L12.58 8h-1.75l3.4 3.4H16zm1.97 6.57L2.1 2.1.69 3.51l5.66 5.66-.21.23H3.6c-.88 0-1.6.72-1.6 1.6v9.4c0 .88.72 1.6 1.6 1.6h12.8c.75 0 1.38-.52 1.55-1.22l2.54 2.54 1.41-1.41-3.93-3.94zM11.5 15.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S9.17 14 10 14s1.5.67 1.5 1.5zm4.46 4.5H4v-8.6h3.02l.59-.65.15-.16 1.5 1.5A3.486 3.486 0 0 0 6.5 15.5c0 1.93 1.57 3.5 3.5 3.5 1.68 0 3.07-1.18 3.42-2.76l2.55 2.55-.01 1.21z\"/>")
      .name("NoFlashTwoTone")
  }
}

export default NoFlashTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>