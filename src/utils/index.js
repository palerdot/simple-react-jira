// some validators
import _ from 'lodash'

// validators for title
export function titleValidator(title) {
  let MIN = 1
  let MAX = 80

  return _.size(title) >= MIN && _.size(title) <= MAX
}

// validators for tag
export function tagsValidator(tags) {
  let MIN = 1
  let MAX = 20

  let status = _.map(tags, (tag) => {
    return _.size(tag) >= MIN && _.size(tag) <= MAX
  })

  return _.size(_.compact(status)) > 0
}