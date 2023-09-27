import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class PestControlRound {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M21 14c0-.55-.45-1-1-1h-2.07c-.05-.39-.12-.77-.22-1.14l1.72-.99c.48-.28.64-.89.37-1.37a1.01 1.01 0 0 0-1.37-.37l-1.51.87c-.28-.48-.62-.91-.99-1.29.04-.23.07-.46.07-.71 0-.8-.24-1.55-.65-2.18l.94-.94a.996.996 0 1 0-1.41-1.41l-1.02 1.02c-1.68-.89-3.1-.33-3.73 0L9.12 3.46a.996.996 0 1 0-1.41 1.41l.94.94C8.24 6.45 8 7.2 8 8c0 .25.03.48.07.72-.37.38-.71.81-.99 1.28l-1.51-.87a.996.996 0 0 0-1.36.37c-.28.48-.11 1.09.37 1.37l1.72.99c-.1.37-.17.75-.22 1.14H4c-.55 0-1 .45-1 1s.45 1 1 1h2.07c.05.39.12.77.22 1.14l-1.72.99c-.48.28-.64.89-.37 1.37.28.48.89.64 1.37.37L7.08 18c1.08 1.81 2.88 3 4.92 3s3.84-1.19 4.92-3l1.51.87c.48.28 1.09.11 1.37-.37s.11-1.09-.37-1.37l-1.72-.99c.1-.37.17-.75.22-1.14H20c.55 0 1-.45 1-1zm-9 3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1z\"/>")
      .name("PestControlRound")
  }
}

export default PestControlRound as Pretty as Typed<DLightIconType, HTMLSpanElement>