import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class EditOffOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m14.06 9.02.92.92-1.11 1.11 1.41 1.41 2.52-2.52-3.75-3.75-2.52 2.52 1.41 1.41 1.12-1.1zm6.65-1.98a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM2.81 2.81 1.39 4.22l7.32 7.32L3 17.25V21h3.75l5.71-5.71 7.32 7.32 1.41-1.41L2.81 2.81zM5.92 19H5v-.92l5.13-5.13.92.92L5.92 19z\"/>")
      .name("EditOffOutlined")
  }
}

export default EditOffOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
