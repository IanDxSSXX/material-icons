import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class BluetoothDisabledRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19.29 17.89 6.11 4.7A.996.996 0 1 0 4.7 6.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L11 14.41v6.18c0 .89 1.08 1.34 1.71.71l3.59-3.59 1.59 1.59c.39.39 1.02.39 1.41 0 .38-.39.38-1.03-.01-1.41zm-6.29.28v-3.76l1.88 1.88L13 18.17zm0-12.34 1.88 1.88-1.47 1.47 1.41 1.41L17 8.42c.39-.39.39-1.02 0-1.42l-4.29-4.29c-.63-.63-1.71-.19-1.71.7v3.36l2 2V5.83z\"/>")
      .name("BluetoothDisabledRound")
  }
}

export default BluetoothDisabledRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>