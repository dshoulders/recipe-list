import { h } from 'hyperapp'
import * as baseStyles from '../styles/baseStyles'

const textFilter = (filters, filterItems) => {

    const onChange = ({ target }) => filterItems({ text: target.value })

    return h('input', { 
        onInput: onChange, 
        value: filters.text,
        placeHolder: 'Search',
        style: baseStyles.input
    }, [])
}

export default textFilter