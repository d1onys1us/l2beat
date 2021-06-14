import { arbitrum } from './arbitrum'
import { aztec } from './aztec'
import { dydx } from './dydx'
import { fuel } from './fuel'
import { hermez } from './hermez'
import { immutablex } from './immutablex'
import { deversifi } from './deversifi'
import { layer2finance } from './layer2finance'
import { loopring } from './loopring'
import { omgnetwork } from './omgnetwork'
import { optimism } from './optimism'
import { Project } from './Project'
import { zkswap } from './zkswap'
import { zksync } from './zksync'

export * from './Project'

export const projects: Project[] = [
  arbitrum,
  aztec,
  dydx,
  fuel,
  hermez,
  immutablex,
  deversifi,
  layer2finance,
  loopring,
  omgnetwork,
  optimism,
  zkswap,
  zksync,
]