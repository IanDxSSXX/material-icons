import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PhoneAndroidOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm1 17H7V4h10v14zm-3 3h-4v-1h4v1z\"/>")
      .name("PhoneAndroidOutlined")
  }
}

export default PhoneAndroidOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
