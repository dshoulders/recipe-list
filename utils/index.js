import { h as hyperx } from 'hyperapp'

export const curry = (fn, ...initialArgs) => {
    const argsCollector = args1 => (...args2) => {
        const accumulatedArgs = [...args1, ...args2]
        if(accumulatedArgs.length >= fn.length) {
            return fn.apply(null, accumulatedArgs)
        }
        return argsCollector(accumulatedArgs)
    }
    return argsCollector(initialArgs)
}

export const split = curry((exp, str) => str.split(exp))
export const pipe = (...fns) => (x) => fns.reduce((prev, func) => func(prev), x)
export const filter = curry((fn, arr) => arr.filter(fn))
export const map = curry((fn, arr) => arr.map(fn))
export const reduce = curry((fn, init, arr) => arr.reduce(fn, init))
export const merge = (...args) => Object.assign({}, ...args)
export const sort = curry((fn, arr) => [...arr].sort(fn))

export const h = curry((tag, data, children) => hyperx(tag, data, children))

export const log = input => { 
    console.log(input)
    return input 
}

export const splitOnTags = str => str.replace(/(https?:\/\/\S*)|(#\S*)/gi, '|$1$2|').split('|')

export const unique = array => array.reduce((acc, cur) => {
    if(!acc.includes(cur)){
        acc.push(cur)
    }
    return acc
}, [])

export const mapId = x => x.id