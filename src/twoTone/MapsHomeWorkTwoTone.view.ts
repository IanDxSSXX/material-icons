import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MapsHomeWorkTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17 11h2v2h-2v2h2v2h-2v2h4V5h-9v1.4l5 3.57V11zm0-4h2v2h-2V7z\" opacity=\".3\"/><path d=\"M10 3v1.97l.96.69L12 6.4V5h9v14h-4v2h6V3z\"/><path d=\"M3 12v7h2v-5h6v5h2v-7L8 8.5z\" opacity=\".3\"/><path d=\"M17 7h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zM1 11v10h6v-5h2v5h6V11L8 6l-7 5zm12 8h-2v-5H5v5H3v-7l5-3.5 5 3.5v7z\"/>")
      .name("MapsHomeWorkTwoTone")
  }
}

export default MapsHomeWorkTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>