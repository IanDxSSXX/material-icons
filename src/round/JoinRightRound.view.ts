import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class JoinRightRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M11.32 17.2c.39.35.98.35 1.37 0C14.65 15.44 15 13.16 15 12c0-1.15-.35-3.44-2.32-5.2-.39-.35-.98-.35-1.37 0C9.35 8.56 9 10.84 9 12c0 1.15.35 3.44 2.32 5.2z\"/><path d=\"M16.5 12c0 .97-.23 4.16-3.03 6.5.78.31 1.63.5 2.53.5 3.86 0 7-3.14 7-7s-3.14-7-7-7c-.9 0-1.75.19-2.53.5 2.8 2.34 3.03 5.53 3.03 6.5zM8 19c.9 0 1.75-.19 2.53-.5-.61-.51-1.1-1.07-1.49-1.63-.33.08-.68.13-1.04.13-2.76 0-5-2.24-5-5s2.24-5 5-5c.36 0 .71.05 1.04.13.39-.56.88-1.12 1.49-1.63C9.75 5.19 8.9 5 8 5c-3.86 0-7 3.14-7 7s3.14 7 7 7z\"/>")
      .name("JoinRightRound")
  }
}

export default JoinRightRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>