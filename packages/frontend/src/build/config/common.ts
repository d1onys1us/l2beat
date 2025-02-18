import { bridges, layer2s, milestonesLayer2s, tokenList } from '@l2beat/config'

import { Config } from './Config'

const GITCOIN_BETA_ROUND_END = new Date('2023-05-09T23:59:59Z')

export const common: Omit<Config, 'backend'> = {
  links: {
    twitter: 'https://twitter.com/l2beat',
    discord: 'https://discord.gg/eaVKXPmtWk',
    github: 'https://github.com/l2beat/l2beat',
    linkedin: 'https://www.linkedin.com/company/l2beat/',
    youTube: 'https://www.youtube.com/channel/UCDrl-fNXFjOoykr4lQij9BA/videos',
    medium: 'https://medium.com/l2beat',
    forum: 'https://gov.l2beat.com/',
  },
  features: {
    banner: new Date() <= GITCOIN_BETA_ROUND_END,
    gitcoinOption: false,
    hiring: true,
    activity: true,
    milestones: true,
    maturity: false,
    buildAllProjectPages: false,
    upcomingRollups: true,
  },
  layer2s,
  bridges,
  tokens: tokenList,
  milestones: milestonesLayer2s,
}
