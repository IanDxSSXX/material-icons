import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class TouchAppSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M8.25 9.24V5.5a2.5 2.5 0 0 1 5 0v3.74c1.21-.81 2-2.18 2-3.74 0-2.49-2.01-4.5-4.5-4.5s-4.5 2.01-4.5 4.5c0 1.56.79 2.93 2 3.74zm5.08 2.26h-1.08v-6c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v10.74l-4.04-.85L4 16.62 9.38 22h8.67l1.07-7.62-5.79-2.88z\"/>")
      .name("TouchAppSharp")
  }
}

export default TouchAppSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
