import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class AssistantPhotoOutlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m12.36 6 .08.39.32 1.61H18v6h-3.36l-.08-.39-.32-1.61H7V6h5.36M14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6L14 4z\"/>")
      .name("AssistantPhotoOutlined")
  }
}

export default AssistantPhotoOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
