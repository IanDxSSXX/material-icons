import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class NotAccessibleRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-2 18c-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1a5 5 0 1 0 5.9 5.9h-2.07c-.41 1.16-1.52 2-2.83 2zm10.49.49L3.51 3.51A.996.996 0 1 0 2.1 4.92l7.9 7.9V15c0 1.1.9 2 2 2h2.17l4.9 4.9c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41zm-2.33-9.56a5.762 5.762 0 0 1-3.23-1.76l-1.29-1.43c-.24-.24-.44-.36-.63-.46-.36-.19-.72-.3-1.2-.26-.49.04-.91.27-1.23.61L14 11.05c1 .83 2.4 1.54 3.8 1.82.62.13 1.2-.34 1.2-.97 0-.48-.36-.89-.84-.97z\"/>")
      .name("NotAccessibleRound")
  }
}

export default NotAccessibleRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
