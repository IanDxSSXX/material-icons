import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ElectricMopedOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 5c0-1.1-.9-2-2-2h-3v2h3v2.65L13.52 12H10V7H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48L19 8.35V5zM4 12v-1c0-1.1.9-2 2-2h2v3H4zm3 3c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1z\"/><path d=\"M5 4h5v2H5zm14 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM7 20h4v-2l6 3h-4v2z\"/>")
      .name("ElectricMopedOutlined")
  }
}

export default ElectricMopedOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>