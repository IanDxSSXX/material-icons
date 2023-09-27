import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class TransitEnterexitTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M15.98 6 9 12.77V8H6v10h10v-3h-4.85L18 8.03z\"/>")
      .name("TransitEnterexitTwoTone")
  }
}

export default TransitEnterexitTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
