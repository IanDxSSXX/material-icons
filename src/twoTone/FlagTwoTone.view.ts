import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class FlagTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M12.36 6H7v6h7.24l.4 2H18V8h-5.24z\" opacity=\".3\"/><path d=\"M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6zm3.6 8h-3.36l-.4-2H7V6h5.36l.4 2H18v6z\"/>")
      .name("FlagTwoTone")
  }
}

export default FlagTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
