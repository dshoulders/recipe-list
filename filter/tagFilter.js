import { h } from 'hyperapp'
import { pipe, reduce, unique, log } from '../utils'
import * as baseStyles from '../styles/baseStyles'
import { HASH_TAG_REGEX } from '../constants'

const tagFilter = (items, filters, filterItems) => {

    const allTags = pipe(
        reduce((acc, item) => {
            const matches = item.notes.match(HASH_TAG_REGEX)
            return matches ? acc.concat(matches) : acc
        }, []),
        unique
    )(items)

    const filterStyle = {
        marginBottom: '8px',
        display: 'flex',
        flexWrap: 'wrap'
    }

    const deselectedTagStyles =
        Object.assign({}, baseStyles.tagStyles, { marginRight: '4px', marginTop: '4px' })

    const selectedTagStyles =
        Object.assign({}, deselectedTagStyles, { color: baseStyles.colour.blue })

    const getStyle = tag => 
        tag === filters.tag ? selectedTagStyles : deselectedTagStyles

    const filter = tag => (...args) => filterItems({ tag })

    return h('div', { style: filterStyle }, allTags.map(tag => {
            return h('div', { 
                onClick: filter(tag), 
                style: getStyle(tag) 
            }, tag)
        })
    )
}

export default tagFilter