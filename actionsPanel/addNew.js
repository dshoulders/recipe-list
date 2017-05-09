import { h } from 'hyperapp'

const style = {
    fontSize: '13px',
    cursor: 'pointer',
    color: '#7b7b7b'
}

const addNew = go => 
    h('span', { style, onClick: () => filterRecipes() }, '\u2715 Clear')

export default addNew