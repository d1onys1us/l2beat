import { Bridge } from '@l2beat/config'

import { TechnologyIncompleteProps } from '../../../components/project/TechnologyIncomplete'
import { TechnologySectionProps } from '../../../components/project/TechnologySection'
import { getTwitterLink } from '../../../utils/project/getTwitterLink'
import { makeTechnologyChoice } from '../../../utils/project/makeTechnologyChoice'
import { getEditLink } from './links'

interface TechnologyOverview {
  incomplete?: TechnologyIncompleteProps
  sections: TechnologySectionProps[]
}

export function getTechnologyOverview(project: Bridge): TechnologyOverview {
  function makeSections() {
    const technology: TechnologySectionProps = {
      id: 'technology',
      title: 'Technology',
      items: [
        project.technology.principleOfOperation &&
          makeTechnologyChoice(
            'principle-of-operation',
            project.technology.principleOfOperation,
          ),
        project.technology.validation &&
          makeTechnologyChoice('validation', project.technology.validation),
        project.technology.destinationToken &&
          makeTechnologyChoice(
            'destination-token',
            project.technology.destinationToken,
          ),
      ].filter(noUndefined),
    }

    return [technology].filter((x) => x.items.length > 0)
  }

  const sections = makeSections()
  const isIncomplete =
    !!project.contracts?.isIncomplete ||
    sections.length !== 3 ||
    sections.some((x) => x.items.some((x) => x.isIncomplete))

  const incomplete = isIncomplete
    ? {
        editLink: getEditLink(project),
        twitterLink: getTwitterLink(project),
      }
    : undefined

  return {
    incomplete,
    sections,
  }
}

function noUndefined<T>(x: T | undefined): x is T {
  return x !== undefined
}
