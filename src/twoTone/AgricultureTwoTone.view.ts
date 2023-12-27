import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AgricultureTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 9h5c0-1.1-.9-2-2-2H4c-.55 0-1 .45-1 1s.45 1 1 1z\"/><path d=\"M22 14.06V8c0-1.1-.9-2-2-2h-6.29l-1.06-1.06 1.41-1.41-.71-.71-3.53 3.53.71.71 1.41-1.41L13 6.71V9c0 1.1-.9 2-2 2H8.96c-.22-.16-.45-.3-.69-.43l-.4.89-.46-.21.4-.9C7.26 10.13 6.64 10 6 10c-.53 0-1.04.11-1.52.26l.34.91-.47.18-.35-.93a4.92 4.92 0 0 0-2.43 2.31l.89.4-.21.46-.9-.4C1.13 13.74 1 14.36 1 15c0 .53.11 1.04.26 1.52l.91-.34.18.47-.93.35a4.92 4.92 0 0 0 2.31 2.43l.4-.89.46.21-.4.9c.55.22 1.17.35 1.81.35.53 0 1.04-.11 1.52-.26l-.34-.91.47-.18.35.93a4.92 4.92 0 0 0 2.43-2.31l-.89-.4.21-.46.9.4c.1-.26.18-.54.24-.82h5.16c-.02.17-.05.34-.05.51 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-.95-.38-1.81-1-2.44zM6 18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm4.87-4c-.04-.18-.08-.35-.13-.52l-.91.34-.18-.47.93-.35H11c2.21 0 4-1.79 4-4V8h5v5.05c-.16-.02-.33-.05-.5-.05-.95 0-1.81.38-2.44 1h-6.19zm8.63 4c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"/><path d=\"M20 13.05V8h-5v1c0 2.21-1.79 4-4 4h-.42c.14.32.25.65.32 1h6.16c.63-.62 1.49-1 2.44-1 .17 0 .34.03.5.05z\" opacity=\".3\"/>")
      .name("AgricultureTwoTone")
  }
}

export default AgricultureTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>