import { h } from 'hyperapp'

const panelStyle = {
    marginBottom: '15px'
}

const actionStyle = {
    fontSize: '13px',
    cursor: 'pointer',
    color: '#7b7b7b',
    marginRight: '15px'
}

const actionsPanel = (filterItems, go) => {
    return h('div', { style: panelStyle }, [
        h('span', { style: actionStyle, onClick: () => filterItems() }, '\u00D7 Clear Filter'),
        h('span', { style: actionStyle, onClick: () => go('/item/new') }, '\u002B Add New Item')        
    ])
}

export default actionsPanel