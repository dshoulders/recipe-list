import { mapId, pipe, filter, map, merge } from '../utils'

const onFilterChange = (model, newPartialFilters) => {
    const newFilters = newPartialFilters ?
        merge(model.filters, newPartialFilters) :
            { text: null, tag: null }

    return {
        visibleItemIds: filterItems(newFilters, model.items),
        filters: newFilters
    }
}

const filterItems = (filters, items) => pipe(
    filter(r => filters.text === null || r.title.toLowerCase().includes(filters.text.toLowerCase())),
    filter(r => filters.tag === null || r.notes.includes(filters.tag)),
    map(mapId)
)(items)


// ACTIONS
const actions = {
    receiveItems: (model, items) => {
        const allKeys = Object.keys(items)
        const itemsList = allKeys.map(key => items[key])
        return { items: itemsList, visibleItemIds: itemsList.map(mapId) }
    },
    filterItems: (model, newPartialFilters) => {

        const newFilters = merge({ text: null, tag: null }, newPartialFilters)

        return {
            visibleItemIds: filterItems(newFilters, model.items),
            filters: newFilters
        }
    },
    updateTempItem: (model, updatedProps) => {
        return {
            tempItem: merge(model.tempItem, updatedProps)
        }
    },
    saveitem: (model, itemToSave, actions) => {

        const newFilters = { text: null, tag: null }
        const isNewItem = typeof itemToSave.id !== 'string'
        const newKey = firebase.database().ref().child('lists/recipes').push().key
        let items = null;

        if(isNewItem) {
            itemToSave = merge(itemToSave, { id: newKey })
        }

        // save to firebase
        firebase.database().ref('lists/recipes/' + itemToSave.id).set(itemToSave);

        // return to main list
        actions.router.go('/')

        if(isNewItem) {
            // add item to start of list
            items = [itemToSave, ...model.items]
        } else {  
            // replace item in list
            items = model.items.map(item => item.id === itemToSave.id ? itemToSave : item) 
        }

        return { 
            filters: newFilters,
            items, 
            tempItem: null,
            visibleItemIds: items.map(item => item.id)
        }
    },
    removeItem: (model, itemId, actions) => {
        firebase.database().ref('lists/recipes/' + itemId).remove();

        const newFilters = { text: null, tag: null }
        const newItems = model.items.reduce((list, item) => {
            if(item.id !== itemId) {
                list.push(item)
            }
            return list;
        }, [])

        // return to main list
        actions.router.go('/')

        return {
            filters: newFilters,
            items: newItems
        }
    },
    authformChange: (model, { key, val }) => {

        const newAuth = merge(model.auth)
        newAuth[key] = val

        return {
            auth: newAuth
        }
    },
    login: (model, _, actions) => {

        firebase.auth().signInWithEmailAndPassword(model.auth.username, model.auth.password)
            .then(() => {
                actions.router.go('/')
            })

        return {
            auth: {
                username: '',
                password: ''
            }
        }
    }
}

export default actions