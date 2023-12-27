import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class BluetoothAudioRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m15.98 10.28-1.38 1.38c-.2.2-.2.51 0 .71l1.38 1.38c.28.28.75.15.85-.23.11-.5.17-1 .17-1.52a6 6 0 0 0-.18-1.48.5.5 0 0 0-.84-.24zm4.12-2.5a.863.863 0 0 0-1.4-.24c-.26.26-.31.64-.17.98.46 1.07.72 2.24.72 3.47 0 1.24-.26 2.42-.73 3.49a.84.84 0 0 0 .16.94.84.84 0 0 0 1.35-.23c.63-1.3.98-2.76.98-4.3a9.995 9.995 0 0 0-.91-4.11zM11.39 12l3.59-3.58c.39-.39.39-1.02 0-1.42l-4.29-4.29c-.63-.63-1.71-.18-1.71.71V9.6L5.09 5.7a.996.996 0 1 0-1.41 1.41L8.57 12l-4.89 4.89a.996.996 0 1 0 1.41 1.41l3.89-3.89v6.18c0 .89 1.08 1.34 1.71.71l4.3-4.3c.39-.39.39-1.02 0-1.42L11.39 12zm-.41-6.17 1.88 1.88-1.88 1.88V5.83zm0 12.34v-3.76l1.88 1.88-1.88 1.88z\"/>")
      .name("BluetoothAudioRound")
  }
}

export default BluetoothAudioRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
