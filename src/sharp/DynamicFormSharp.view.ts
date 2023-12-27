import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DynamicFormSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17 20v-9h-2V4h7l-2 5h2l-5 11zm-2-7v7H2v-7h13zm-8.75 2.75h-1.5v1.5h1.5v-1.5zM13 4v7H2V4h11zM6.25 6.75h-1.5v1.5h1.5v-1.5z\"/>")
      .name("DynamicFormSharp")
  }
}

export default DynamicFormSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
