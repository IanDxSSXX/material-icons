import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class DriveFileMoveFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 12v-3h-4v-4h4V8l5 5-5 5z\"/>")
      .name("DriveFileMoveFilled")
  }
}

export default DriveFileMoveFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>
