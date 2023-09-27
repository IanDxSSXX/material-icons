import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class LastPageOutlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6-1.41 1.41zM16 6h2v12h-2V6z\"/>")
      .name("LastPageOutlined")
  }
}

export default LastPageOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
