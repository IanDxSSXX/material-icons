import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class RunCircleTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1.5 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2.5 6c-.7 0-2.01-.54-2.91-1.76l-.41 2.35L14 14.03V18h-1v-3.58l-1.11-1.21-.52 2.64-3.77-.77.2-.98 2.78.57.96-4.89-1.54.57V12H9V9.65l3.28-1.21c.49-.18 1.03.06 1.26.53.83 1.7 2.05 2.03 2.46 2.03v1z\" opacity=\".3\"/><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/><path d=\"M13.54 8.97c-.23-.47-.76-.71-1.26-.53L9 9.65V12h1v-1.65l1.54-.57-.96 4.89-2.78-.57-.2.98 3.76.77.52-2.64L13 14.42V18h1v-3.97l-1.32-1.44.41-2.35C13.99 11.46 15.3 12 16 12v-1c-.41 0-1.63-.33-2.46-2.03z\"/><circle cx=\"13.5\" cy=\"7\" r=\"1\"/>")
      .name("RunCircleTwoTone")
  }
}

export default RunCircleTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
