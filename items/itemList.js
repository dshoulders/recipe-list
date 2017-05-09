import { h, pipe, map, filter } from '../utils'
import itemDisplay from './itemDisplay'

const itemList = (items, visibleItemIds, actions) => pipe(
    filter(r => visibleItemIds.includes(r.id)),
    map(item => itemDisplay(item, actions.router.go)),
    h('div', { })
)(items)

export default itemList