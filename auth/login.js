import { h } from 'hyperapp'
import * as baseStyles from '../styles/baseStyles'
import layout from '../layout'
import { merge } from '../utils'

const containerStyle = {
    padding: baseStyles.padding
}

const buttonStyle = baseStyles.button

const actionsStyles = {
    display: 'flex',
    justifyContent: 'flex-end',
}

const login = ({ auth }, { authformChange, login }) => {

    const fieldChange = fieldName => ({ target }) => {
        authformChange({ key: fieldName, val: target.value })
    }
    
    return layout(
        h('div', { style: containerStyle }, [
            h('input', { 
                style: baseStyles.input,
                value: auth.username, 
                onInput: fieldChange('username') 
            }, []),
            h('input', { 
                style: baseStyles.input,
                value: auth.password, 
                type: 'password', 
                onInput: fieldChange('password') 
            }, []),
            h('div', { style: actionsStyles }, 
                h('button', { 
                    style: buttonStyle,
                    onClick: login 
                }, 'Log In')
            )            
        ])
    )
}

export default login