import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class EmergencyRecordingOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 10.48V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.48l4 3.98v-11l-4 3.98zM16 18H4V6h12v12zm-4-6 3 1.73-1 1.73-3-1.73V17H9v-3.27l-3 1.73-1-1.73L8 12l-3-1.73 1-1.73 3 1.73V7h2v3.27l3-1.73 1 1.73L12 12z\"/>")
      .name("EmergencyRecordingOutlined")
  }
}

export default EmergencyRecordingOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
