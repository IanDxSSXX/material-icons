import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FileCopyFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4 6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z\"/>")
      .name("FileCopyFilled")
  }
}

export default FileCopyFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
