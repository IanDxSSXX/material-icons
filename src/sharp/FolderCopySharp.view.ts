import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class FolderCopySharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M3 6H1v15h19v-2H3z\"/><path d=\"M23 4h-9l-2-2H5.01L5 17h18V4z\"/>")
      .name("FolderCopySharp")
  }
}

export default FolderCopySharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
