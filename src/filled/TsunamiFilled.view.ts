import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TsunamiFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18.67 17.63c-3.8 2.8-6.12.4-6.67 0-.66.49-2.92 2.76-6.67 0C3.43 19.03 2.65 19 2 19v2c1.16 0 2.3-.32 3.33-.93a6.535 6.535 0 0 0 6.67 0 6.535 6.535 0 0 0 6.67 0c1.03.61 2.17.93 3.33.93v-2c-.66 0-1.5-.02-3.33-1.37zm.66-5.63H22v-2h-2.67C17.5 10 16 8.5 16 6.67c0-1.02.38-1.74 1.09-3.34-1.37-.21-2-.33-3.09-.33C7.36 3 2.15 8.03 2.01 14.5l-.01 2c1.16 0 2.3-.32 3.33-.93a6.535 6.535 0 0 0 6.67 0 6.535 6.535 0 0 0 6.67 0c1.03.61 2.17.93 3.33.93v-2c-.66 0-1.5-.02-3.33-1.37-3.8 2.8-6.12.4-6.67 0-.9.67-.54.41-.91.63-.7-.94-1.09-2.06-1.09-3.26 0-2.58 1.77-4.74 4.21-5.33-.13.51-.21 1.02-.21 1.5C14 9.61 16.39 12 19.33 12z\"/>")
      .name("TsunamiFilled")
  }
}

export default TsunamiFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
