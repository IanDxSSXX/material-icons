import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FileDownloadOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zm-1-4-1.41-1.41L13 12.17V4h-2v8.17L8.41 9.59 7 11l5 5 5-5z\"/>")
      .name("FileDownloadOutlined")
  }
}

export default FileDownloadOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
