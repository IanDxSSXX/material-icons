import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class ModeEditOutlineOutlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M3 21h3.75L17.81 9.94l-3.75-3.75L3 17.25V21zm2-2.92 9.06-9.06.92.92L5.92 19H5v-.92zM18.37 3.29a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34z\"/>")
      .name("ModeEditOutlineOutlined")
  }
}

export default ModeEditOutlineOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
