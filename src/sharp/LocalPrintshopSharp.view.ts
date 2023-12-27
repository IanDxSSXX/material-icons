import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LocalPrintshopSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2 8v9h4v4h12v-4h4V8H2zm14 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z\"/>")
      .name("LocalPrintshopSharp")
  }
}

export default LocalPrintshopSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
