import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TaxiAlertOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<circle cx=\"6.5\" cy=\"15.5\" r=\"1.5\"/><circle cx=\"15.5\" cy=\"15.5\" r=\"1.5\"/><path d=\"M18 13v5H4v-5h14c-1.91 0-3.63-.76-4.89-2h-8.3l1.04-3h5.44C11.1 7.37 11 6.7 11 6s.1-1.37.29-2H8v2H5.5c-.66 0-1.21.42-1.42 1.01L2 13v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-.09-.27c-.61.17-1.25.27-1.91.27z\"/><path d=\"M18 1c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm.5 8h-1V8h1v1zm0-2h-1V3h1v4z\"/>")
      .name("TaxiAlertOutlined")
  }
}

export default TaxiAlertOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
