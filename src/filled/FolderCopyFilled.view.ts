import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class FolderCopyFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M3 6H1v13c0 1.1.9 2 2 2h17v-2H3V6z\"/><path d=\"M21 4h-7l-2-2H7c-1.1 0-1.99.9-1.99 2L5 15c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z\"/>")
      .name("FolderCopyFilled")
  }
}

export default FolderCopyFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>
