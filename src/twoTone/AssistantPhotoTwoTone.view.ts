import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class AssistantPhotoTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m14.24 12 .4 2H18V8h-5.24l-.4-2H7v6z\" opacity=\".3\"/><path d=\"M7 14h5.6l.4 2h7V6h-5.6L14 4H5v17h2v-7zm0-8h5.36l.4 2H18v6h-3.36l-.4-2H7V6z\"/>")
      .name("AssistantPhotoTwoTone")
  }
}

export default AssistantPhotoTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
