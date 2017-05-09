import { h } from '../utils'
import layout from '../layout'
import filter from '../filter/filter'
import actionsPanel from '../actionsPanel/actionsPanel'
import itemList from './itemList'
import * as baseStyles from '../styles/baseStyles'
import { sort } from '../utils'

const style = {
    fontFamily: baseStyles.fontFamily,
    color: baseStyles.colour.darkGrey,
    background: baseStyles.colour.lightBlue,
    padding: '20px'
}

const byTitle = (a, b) => {
    const aTitle = a.title.toLowerCase()
    const bTitle = b.title.toLowerCase()
    return aTitle < bTitle ? -1 : aTitle > bTitle ? 1 : 0
}

const itemBrowser = (model, actions) => {

    return layout(h('div', { style }, [
        filter(model.filters, model.items, actions.filterItems),
        actionsPanel(actions.filterItems, actions.router.go),
        itemList(sort(byTitle, model.items), model.visibleItemIds, actions)
    ]))
}

export default itemBrowser