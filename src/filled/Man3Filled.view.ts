import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Man3Filled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14 7h-4c-1.1 0-2 .9-2 2v6h2v7h4v-7h2V9c0-1.1-.9-2-2-2zm-2-5.249L14.248 4 12 6.248 9.75 4z\"/>")
      .name("Man3Filled")
  }
}

export default Man3Filled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
