import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class SubdirectoryArrowRightRound {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m18.29 15.71-4.58 4.58c-.39.39-1.03.39-1.42 0-.39-.39-.39-1.03 0-1.42L15.17 16H5c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1s1 .45 1 1v9h9.17l-2.88-2.87c-.39-.39-.39-1.03 0-1.42.39-.39 1.03-.39 1.42 0l4.58 4.58c.39.39.39 1.03 0 1.42z\"/>")
      .name("SubdirectoryArrowRightRound")
  }
}

export default SubdirectoryArrowRightRound as Pretty as Typed<DLightIconType, HTMLSpanElement>
