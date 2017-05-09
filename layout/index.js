import { h } from 'hyperapp'

const style = {
    maxWidth: '600px',
    margin: '0 auto'
}

const layout = children => h('div', { style }, children)

export default layout