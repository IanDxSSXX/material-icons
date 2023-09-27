import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class SubdirectoryArrowRightTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m19 15-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z\"/>")
      .name("SubdirectoryArrowRightTwoTone")
  }
}

export default SubdirectoryArrowRightTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
