import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class VapeFreeRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20.49 21.9a.996.996 0 0 1-1.41 0l-2.9-2.9H8v-3h5.17L2.1 4.93a.996.996 0 1 1 1.41-1.41l16.97 16.97c.4.39.4 1.02.01 1.41zM18.83 16h1.67a1.498 1.498 0 0 1 .97 2.64L18.83 16zm-8.33 1c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm8.35-9.27c.62-.61 1-1.45 1-2.38 0-1.51-1-2.79-2.38-3.21a.758.758 0 0 0-.97.72c0 .33.21.62.52.71.77.23 1.33.94 1.33 1.78 0 .82-.53 1.51-1.27 1.76-.33.11-.58.39-.58.74V8c0 .37.27.69.64.75 1.93.31 3.36 2 3.36 4.02v1.48c0 .41.34.75.75.75s.75-.34.75-.75v-1.49c0-2.22-1.28-4.14-3.15-5.03zm-4.37 3.92h1.55c1.05 0 1.97.74 1.97 2.05v.55c0 .41.34.75.76.75.41 0 .75-.33.75-.75v-.89c-.01-1.81-1.61-3.16-3.48-3.16h-1.3c-1.02 0-1.94-.73-2.07-1.75-.12-.95.46-1.7 1.3-1.93.32-.09.54-.38.54-.72 0-.49-.46-.86-.93-.72a3.354 3.354 0 0 0-2.42 3.24l3.33 3.33zM3 18.5c1.33 0 2.71.18 4 .5v-3c-1.29.32-2.67.5-4 .5-.55 0-1 .45-1 1s.45 1 1 1z\"/>")
      .name("VapeFreeRound")
  }
}

export default VapeFreeRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
