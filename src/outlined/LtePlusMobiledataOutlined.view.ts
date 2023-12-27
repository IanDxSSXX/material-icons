import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LtePlusMobiledataOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 14h3v2H1V8h2v6zm2-4h2v6h2v-6h2V8H5v2zm7 6h5v-2h-3v-1h3v-2h-3v-1h3V8h-5v8zm12-5h-2V9h-2v2h-2v2h2v2h2v-2h2v-2z\"/>")
      .name("LtePlusMobiledataOutlined")
  }
}

export default LtePlusMobiledataOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
