import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DeveloperBoardSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 9V7h-2V3H2v18h18v-4h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6v-4zm6-6h4v3h-4V7zM6 7h5v5H6V7zm6 4h4v6h-4v-6z\"/>")
      .name("DeveloperBoardSharp")
  }
}

export default DeveloperBoardSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
