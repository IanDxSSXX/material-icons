import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DoDisturbOnOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z\"/>")
      .name("DoDisturbOnOutlined")
  }
}

export default DoDisturbOnOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
