import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DownloadingRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17.33 3.55c-.94-.6-1.99-1.04-3.12-1.3a.998.998 0 0 0-1.21.98c0 .45.3.87.74.97.91.2 1.77.56 2.53 1.05.39.25.89.17 1.22-.16.45-.45.38-1.2-.16-1.54zM20.77 11c.64 0 1.13-.59.98-1.21-.26-1.12-.7-2.17-1.3-3.12-.34-.54-1.1-.61-1.55-.16-.32.32-.4.83-.16 1.22.49.77.85 1.62 1.05 2.53a1 1 0 0 0 .98.74zm-1.87 6.49c.45.45 1.21.38 1.55-.15.6-.94 1.04-1.99 1.3-3.11.14-.62-.35-1.21-.98-1.21-.45 0-.87.3-.97.74-.2.91-.57 1.76-1.05 2.53-.25.37-.17.88.15 1.2zM13 20.77c0 .64.59 1.13 1.21.98 1.12-.26 2.17-.7 3.11-1.3.54-.34.61-1.1.16-1.55-.32-.32-.83-.4-1.21-.15-.76.49-1.61.85-2.53 1.05-.44.1-.74.51-.74.97zM13 12V8c0-.55-.45-1-1-1s-1 .45-1 1v4H9.41c-.89 0-1.34 1.08-.71 1.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H13zm-2 8.77c0 .64-.59 1.13-1.21.99C5.33 20.75 2 16.77 2 12s3.33-8.75 7.79-9.75a.998.998 0 0 1 1.21.98c0 .46-.31.87-.76.97C6.67 5 4 8.19 4 12s2.67 7 6.24 7.8c.45.1.76.51.76.97z\"/>")
      .name("DownloadingRound")
  }
}

export default DownloadingRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
