import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class SwipeRightSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M20.18 15.4 19.1 23h-9L5 17.62l1.22-1.23 3.78.85V6.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6h1.38l5.8 2.9zm-.27-9.9H17V7h5V2h-1.5v2.02A13.413 13.413 0 0 0 12 1C6.51 1 2.73 4.12 2 7h1.57C4.33 5.02 7.26 2.5 12 2.5c3.03 0 5.79 1.14 7.91 3z\"/>")
      .name("SwipeRightSharp")
  }
}

export default SwipeRightSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
