import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FullscreenExitOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z\"/>")
      .name("FullscreenExitOutlined")
  }
}

export default FullscreenExitOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
