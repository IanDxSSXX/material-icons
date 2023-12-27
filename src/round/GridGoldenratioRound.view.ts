import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class GridGoldenratioRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 13h-6v-2h6c.55 0 1-.45 1-1s-.45-1-1-1h-6V3c0-.55-.45-1-1-1s-1 .45-1 1v6h-2V3c0-.55-.45-1-1-1s-1 .45-1 1v6H3c-.55 0-1 .45-1 1s.45 1 1 1h6v2H3c-.55 0-1 .45-1 1s.45 1 1 1h6v6c0 .55.45 1 1 1s1-.45 1-1v-6h2v6c0 .55.45 1 1 1s1-.45 1-1v-6h6c.55 0 1-.45 1-1s-.45-1-1-1zm-8 0h-2v-2h2v2z\"/>")
      .name("GridGoldenratioRound")
  }
}

export default GridGoldenratioRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
