import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class AppBlockingSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M18 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-2.5 4A2.5 2.5 0 0 1 18 9.5c.42 0 .8.11 1.15.29l-3.36 3.36c-.18-.35-.29-.73-.29-1.15zm2.5 2.5c-.42 0-.8-.11-1.15-.29l3.36-3.36c.18.35.29.73.29 1.15a2.5 2.5 0 0 1-2.5 2.5z\"/><path d=\"M19 23v-6h-2v1H7V6h10v1h2V.94L5 1v22h14z\"/>")
      .name("AppBlockingSharp")
  }
}

export default AppBlockingSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
