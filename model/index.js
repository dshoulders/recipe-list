export const initModel = () =>
({
    items: [],
    visibleItemIds: [],
    tempItem: null,
    filters: {
        tag: null,
        text: null
    },
    auth: {
        username: '',
        password: ''
    }
})