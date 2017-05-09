import { h } from 'hyperapp'
import * as baseStyles from '../styles/baseStyles'
import { splitOnTags } from '../utils'

const notesStyles = Object.assign({}, {
    marginTop: '7px',    
    fontWeight: baseStyles.fontWeight.Normal
}, baseStyles.breakLongWords)

const notesDisplay = notes => {

    return h('div', { style: notesStyles}, splitOnTags(notes).map(str => {

        const isHash = str.startsWith('#')
        const isLink = str.startsWith('http')
        return isHash ? h('span', { style: baseStyles.tagStyles }, str) : 
            isLink ? h('a', { href: str }, str) :
                str
    }))
}

export default notesDisplay