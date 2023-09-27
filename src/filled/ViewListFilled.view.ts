import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class ViewListFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M3 14h4v-4H3v4zm0 5h4v-4H3v4zM3 9h4V5H3v4zm5 5h13v-4H8v4zm0 5h13v-4H8v4zM8 5v4h13V5H8z\"/>")
      .name("ViewListFilled")
  }
}

export default ViewListFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>
