import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FoundationTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7 15v-4.81l4-3.6V15H7zm6 0V6.59l4 3.6V15h-4z\" opacity=\".3\"/><path d=\"M19 12h3L12 3 2 12h3v3H3v2h2v3h2v-3h4v3h2v-3h4v3h2v-3h2v-2h-2v-3zM7 15v-4.81l4-3.6V15H7zm6 0V6.59l4 3.6V15h-4z\"/>")
      .name("FoundationTwoTone")
  }
}

export default FoundationTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
