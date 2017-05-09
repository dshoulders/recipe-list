import { h } from 'hyperapp'
import textFilter from './textFilter'
import tagFilter from './tagFilter'

const filter = (filters, items, filterItems) => 
    h('div', {}, [
        textFilter(filters, filterItems),
        tagFilter(items, filters, filterItems)
    ])

export default filter