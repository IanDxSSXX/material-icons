import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class WavingHandRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6.07 9.8c-.2.2-.2.51 0 .71a3.003 3.003 0 0 1 .28 3.92c-.15.2-.12.47.05.65.22.22.57.19.76-.05a4.02 4.02 0 0 0-.04-4.85l7.62-7.62c.49-.49 1.28-.49 1.77 0s.49 1.28 0 1.77l-5.13 5.13c-.2.2-.2.51 0 .71s.51.2.71 0l6.54-6.54c.49-.49 1.28-.49 1.77 0s.49 1.28 0 1.77l-6.54 6.54c-.2.2-.2.51 0 .71s.51.2.71 0l5.48-5.48c.49-.49 1.28-.49 1.77 0s.49 1.28 0 1.77l-6.19 6.19c-.2.2-.2.51 0 .71.2.2.51.2.71 0l4.07-4.07a1.25 1.25 0 0 1 1.77 0c.49.49.49 1.28 0 1.77l-7.07 7.07c-3.22 3.22-8.45 3.22-11.67 0s-3.22-8.45 0-11.67l4.6-4.6a1.25 1.25 0 0 1 1.77 0c.49.49.49 1.28 0 1.77L6.07 9.8zm.93-8c0-.41-.34-.75-.75-.75-.04 0-.07 0-.11.01-2.63.38-4.7 2.46-5.08 5.08 0 .03-.01.07-.01.11 0 .41.34.75.75.75.38 0 .69-.28.74-.64a4.497 4.497 0 0 1 3.81-3.81c.37-.06.65-.37.65-.75zm10 20.4c0 .41.34.75.75.75.04 0 .07 0 .11-.01 2.63-.38 4.7-2.46 5.08-5.08 0-.03.01-.07.01-.11 0-.41-.34-.75-.75-.75-.38 0-.69.28-.74.64a4.497 4.497 0 0 1-3.81 3.81c-.37.06-.65.37-.65.75z\"/>")
      .name("WavingHandRound")
  }
}

export default WavingHandRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
