import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class OpenInBrowserTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2zm-7 6-4 4h3v6h2v-6h3l-4-4z\"/>")
      .name("OpenInBrowserTwoTone")
  }
}

export default OpenInBrowserTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
