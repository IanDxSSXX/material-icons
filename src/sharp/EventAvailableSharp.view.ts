import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class EventAvailableSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M16.53 11.06 15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM21 3h-3V1h-2v2H8V1H6v2H3v18h18V3zm-2 16H5V8h14v11z\"/>")
      .name("EventAvailableSharp")
  }
}

export default EventAvailableSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
