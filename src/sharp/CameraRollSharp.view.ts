import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CameraRollSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14 5V3h-3V1H5v2H2v19h12v-2h8V5h-8zm-2 13h-2v-2h2v2zm0-9h-2V7h2v2zm4 9h-2v-2h2v2zm0-9h-2V7h2v2zm4 9h-2v-2h2v2zm0-9h-2V7h2v2z\"/>")
      .name("CameraRollSharp")
  }
}

export default CameraRollSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
