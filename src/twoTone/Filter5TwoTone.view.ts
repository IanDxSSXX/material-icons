import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Filter5TwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7 17h14V3H7v14zm4-4h4v-2h-4V5h6v2h-4v2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4v-2z\" opacity=\".3\"/><path d=\"M19 23v-2H3V5H1v16c0 1.1.9 2 2 2h16zm-2-10v-2a2 2 0 0 0-2-2h-2V7h4V5h-6v6h4v2h-4v2h4a2 2 0 0 0 2-2zm4-12H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z\"/>")
      .name("Filter5TwoTone")
  }
}

export default Filter5TwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
