import { h } from 'hyperapp'
import * as baseStyles from '../styles/baseStyles'
import notesDisplay from './notesDisplay'

const itemStyles = {
    marginBottom: baseStyles.padding,
    background: '#fff',
    padding: baseStyles.padding,
    boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.20)',
    borderRadius: '3px'
}

const titleStyles = {
    fontSize: '22px',
    fontWeight: baseStyles.fontWeight.NORMAL,
    color: 'lightseagreen'
}

const itemDisplay = ({ title, notes, id }, go) => {

    return h('div', { style: itemStyles }, [
        h('span', { 
            style: titleStyles, 
            ondblClick: _ => go(`/item/edit/${id}`)
        },  title),
        notesDisplay(notes)
    ])
}

export default itemDisplay