import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FileDownloadTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14.17 11H13V5h-2v6H9.83L12 13.17z\" opacity=\".3\"/><path d=\"M5 18h14v2H5zm14-9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11z\"/>")
      .name("FileDownloadTwoTone")
  }
}

export default FileDownloadTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
