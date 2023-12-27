import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TurnedInTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 14.97-4.21-1.81-.79-.34-.79.34L7 17.97V5h10v12.97z\"/><path d=\"m7 17.97 4.21-1.81.79-.34.79.34L17 17.97V5H7z\" opacity=\".3\"/>")
      .name("TurnedInTwoTone")
  }
}

export default TurnedInTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
