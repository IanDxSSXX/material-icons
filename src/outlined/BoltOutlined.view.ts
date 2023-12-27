import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class BoltOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M11 21h-1l1-7H7.5c-.88 0-.33-.75-.31-.78C8.48 10.94 10.42 7.54 13.01 3h1l-1 7h3.51c.4 0 .62.19.4.66C12.97 17.55 11 21 11 21z\"/>")
      .name("BoltOutlined")
  }
}

export default BoltOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
