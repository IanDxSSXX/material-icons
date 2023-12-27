import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FileDownloadDoneTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20.13 5.41 18.72 4l-9.19 9.19-4.25-4.24-1.41 1.41 5.66 5.66zM5 18h14v2H5z\"/>")
      .name("FileDownloadDoneTwoTone")
  }
}

export default FileDownloadDoneTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
