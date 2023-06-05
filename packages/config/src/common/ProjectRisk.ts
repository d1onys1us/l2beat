export interface ProjectRisk {
  /** Category of this risk */
  category: ProjectRiskCategory
  /** Description of the risk. Should form a sentence with the category */
  text: string
  /** If the risk is particularly bad */
  isCritical?: boolean
  /** Ignore tests for formatting */
  _ignoreTextFormatting?: boolean
}

export type ProjectRiskCategory =
  | 'Funds can be stolen if'
  | 'Funds can be lost if'
  | 'Funds can be frozen if'
  | 'Users can be censored if'
  | 'MEV can be extracted if'

export interface ProjectRiskViewEntry {
  value: string
  description: string
  sentiment?: 'warning' | 'bad'
  // second line in risk view
  secondLine?: string
  secondSentiment?: 'warning' | 'bad'
  sources?: {
    contract: string
    references: string[]
  }[]
  otherReferences?: string[]
}
