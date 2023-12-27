import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ForwardTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14 14v1.17L17.17 12 14 8.83V10H6v4z\" opacity=\".3\"/><path d=\"m20 12-8-8v4H4v8h8v4l8-8zM6 14v-4h8V8.83L17.17 12 14 15.17V14H6z\"/>")
      .name("ForwardTwoTone")
  }
}

export default ForwardTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
