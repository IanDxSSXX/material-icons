import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PodcastsRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14 12c0 .74-.4 1.38-1 1.72V21c0 .55-.45 1-1 1s-1-.45-1-1v-7.28c-.6-.35-1-.98-1-1.72 0-1.1.9-2 2-2s2 .9 2 2zm-3.25-5.87c-2.27.46-4.12 2.28-4.61 4.55-.4 1.86.07 3.62 1.08 4.94.35.45 1.03.47 1.43.07l.07-.07c.34-.34.34-.87.06-1.25-.68-.9-.98-2.1-.66-3.37.35-1.42 1.52-2.57 2.95-2.88A3.99 3.99 0 0 1 16 12c0 .87-.28 1.67-.76 2.32-.3.41-.29.97.07 1.33.44.44 1.17.37 1.54-.14.72-.98 1.15-2.2 1.15-3.51 0-3.72-3.39-6.65-7.25-5.87zm.08-4.06c-4.53.51-8.22 4.18-8.76 8.71-.35 2.95.59 5.67 2.32 7.7.37.43 1.03.46 1.43.06l.05-.05c.35-.35.38-.92.05-1.3a7.972 7.972 0 0 1-1.7-7.06c.7-3.01 3.18-5.39 6.22-5.97C15.53 3.18 20 7.08 20 12c0 1.96-.72 3.76-1.9 5.16a1 1 0 0 0 .05 1.35c.42.42 1.11.39 1.49-.07A9.934 9.934 0 0 0 22 12c0-5.91-5.13-10.62-11.17-9.93z\"/>")
      .name("PodcastsRound")
  }
}

export default PodcastsRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
