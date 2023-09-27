import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class SubjectFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z\"/>")
      .name("SubjectFilled")
  }
}

export default SubjectFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>
