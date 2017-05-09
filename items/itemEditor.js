import { h } from 'hyperapp'
import { merge, pipe } from '../utils'
import * as baseStyles from '../styles/baseStyles'
import layout from '../layout'

const fontStyle = {
    fontFamily: baseStyles.fontFamily
}

const buttonStyle = baseStyles.button

const containerStyles = merge({
    padding: '20px',
    color: baseStyles.colour.darkGrey,
}, fontStyle)

const inputStyle = merge(
    baseStyles.input,   
    {
        fontSize: '22px',
        fontWeight: baseStyles.fontWeight.NORMAL
    }
)

const textareaStyles = merge({
    fontSize: '16px',
    padding: '5px 10px',
    width: '100%',
    height: '200px',
    border: 'none',
    marginBottom: baseStyles.padding
}, fontStyle)

const actionsStyles = {
    display: 'flex',
    justifyContent: 'flex-end',
}

const saveStyle = merge({
    marginLeft: baseStyles.padding
}, fontStyle, buttonStyle)

const cancelStyle = merge(fontStyle, buttonStyle, {
    background: '#808080'
})

const deleteStyle = merge(fontStyle, buttonStyle, {
    background: '#c53434',
    marginRight: 'auto'
})


const itemEditor = (model, actions) => {

    const emptyItem = { title: '', notes: '' }

    const tempItem = model.tempItem ||
        merge(emptyItem, model.items.find(item => item.id === model.router.params.itemId))

    const updateItem = pipe(
        newProps => merge(tempItem, newProps),
        actions.updateTempItem
    )

    const changeTitle = ({ target }) => updateItem({ title: target.value })
    const changeNotes = ({ target }) => updateItem({ notes: target.value })

    return layout(h('div', { style: containerStyles }, [
        h('input', { 
            value: tempItem.title, 
            style: inputStyle, 
            placeholder: 'Title',
            onInput: changeTitle 
        }, []),
        h('textarea', { 
            value: tempItem.notes, 
            style: textareaStyles, 
            placeholder: 'Notes',
            onInput: changeNotes 
        }, []),
        h('div', { style: actionsStyles }, [
            h('button', { style: deleteStyle, onClick: () => actions.removeItem(tempItem.id) }, 'Delete'),
            h('button', { style: cancelStyle, onClick: () => actions.router.go('/') }, 'Cancel'),
            h('button', { style: saveStyle, onClick: () => actions.saveitem(tempItem) }, 'Save')
        ])
    ]))
}

export default itemEditor