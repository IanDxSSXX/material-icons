import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class IosShareTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 8h-3v2h3v11H6V10h3V8H6c-1.11 0-2 .89-2 2v11a2 2 0 0 0 2 2h12c1.1 0 2-.9 2-2V10a2 2 0 0 0-2-2z\"/><path d=\"M11 16h2V5h3l-4-4-4 4h3z\"/>")
      .name("IosShareTwoTone")
  }
}

export default IosShareTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
