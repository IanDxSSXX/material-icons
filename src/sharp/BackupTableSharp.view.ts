import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class BackupTableSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 6v14H6v2h16V6z\"/><path d=\"M18 2H2v16h16V2zM9 16H4v-5h5v5zm7 0h-5v-5h5v5zm0-7H4V4h12v5z\"/>")
      .name("BackupTableSharp")
  }
}

export default BackupTableSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
