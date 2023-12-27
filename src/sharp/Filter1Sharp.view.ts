import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Filter1Sharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 5H1v18h18v-2H3V5zm11 10h2V5h-4v2h2v8zm9-14H5v18h18V1zm-2 16H7V3h14v14z\"/>")
      .name("Filter1Sharp")
  }
}

export default Filter1Sharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
