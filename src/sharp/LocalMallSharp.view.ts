import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class LocalMallSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M21 6h-4c0-2.76-2.24-5-5-5S7 3.24 7 6H3v16h18V6zm-9-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z\"/>")
      .name("LocalMallSharp")
  }
}

export default LocalMallSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
