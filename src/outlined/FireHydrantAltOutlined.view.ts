import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FireHydrantAltOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 10.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"/><path d=\"M19 11h-1V8h2V6h-2.35a5.99 5.99 0 0 0-11.3 0H4v2h2v3H5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v3H4v2h16v-2h-2v-3h1c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zm-7-7c1.47 0 2.75.81 3.44 2H8.56c.69-1.19 1.97-2 3.44-2zm7 11h-3v5H8v-5H5v-2h3V8h8v5h3v2z\"/>")
      .name("FireHydrantAltOutlined")
  }
}

export default FireHydrantAltOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
