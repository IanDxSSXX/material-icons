import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ErrorOutlineTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-5h2v2h-2zm0-8h2v6h-2z\"/>")
      .name("ErrorOutlineTwoTone")
  }
}

export default ErrorOutlineTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
