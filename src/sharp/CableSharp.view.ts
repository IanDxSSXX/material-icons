import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CableSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 5V3h-4v2h-1v5h2v9h-4V3H5v11H3v5h1v2h4v-2h1v-5H7V5h4v16h8V10h2V5h-1z\"/>")
      .name("CableSharp")
  }
}

export default CableSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
