import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class HomeTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M12 3 2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z\"/><path d=\"M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z\" opacity=\".3\"/>")
      .name("HomeTwoTone")
  }
}

export default HomeTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
