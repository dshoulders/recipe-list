import { h, app, Router } from 'hyperapp'
import actions from './actions'
import { initModel } from './model'
import subscriptions from './subscriptions'
import itemBrowser from './items/itemBrowser'
import itemEditor from './items/itemEditor'
import login from './auth/login'
import * as baseStyles from './styles/baseStyles'
import firebaseConfig from './firebase.config.js'


firebase.initializeApp(firebaseConfig);

const model = initModel()

const view = {
    '/': itemBrowser,
    '/item/edit/:itemId': itemEditor,
    '/item/new': itemEditor,
    '/login': login
}

const plugins = [Router]

app({ 
    model, 
    actions,
    subscriptions, 
    view,
    plugins
})