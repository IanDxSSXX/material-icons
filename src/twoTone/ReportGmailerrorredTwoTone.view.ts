import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ReportGmailerrorredTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9 14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z\"/><circle cx=\"12\" cy=\"16\" r=\"1\"/><path d=\"M11 7h2v7h-2z\"/>")
      .name("ReportGmailerrorredTwoTone")
  }
}

export default ReportGmailerrorredTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
