import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CatchingPokemonFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14.5 12a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 5 0zm7.5 0c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zm-2 0h-4c0-2.21-1.79-4-4-4s-4 1.79-4 4H4c0 4.41 3.59 8 8 8s8-3.59 8-8z\"/>")
      .name("CatchingPokemonFilled")
  }
}

export default CatchingPokemonFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
