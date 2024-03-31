// import { toyService } from '../../services/toy.service.js'
// import {
//     ADD_TOY,
//     REMOVE_TOY,
//     SET_FILTER_BY,
//     SET_IS_LOADING,
//     SET_SORT_BY,
//     SET_TOYS,
//     UPDATE_TOY,
// } from '../reducers/toy.reducer.js'
// import { store } from '../store.js'

// export async function loadToys() {
//     const { filterBy, sortBy } = store.getState().toyModule
//     store.dispatch({ type: SET_IS_LOADING, isLoading: true })

//     try {
//         const toys = await toyService.query(filterBy, sortBy)
//         store.dispatch({ type: SET_TOYS, toys })
//     } catch (err) {
//         console.log('Toy action -> Cannot load toys', err)
//         throw err
//     } finally {
//         store.dispatch({ type: SET_IS_LOADING, isLoading: false })
//     }
// }

// export async function removeToy(toyId) {
//     try {
//         await toyService.remove(toyId)
//         store.dispatch({ type: REMOVE_TOY, toyId })
//     } catch (err) {
//         console.log('Toy action -> Cannot remove toy', err)
//         throw err
//     }
// }

// export async function saveToy(toy) {
//     const type = toy._id ? UPDATE_TOY : ADD_TOY

//     try {
//         const savedToy = await toyService.save(toy)
//         store.dispatch({ type, toy: savedToy })
//         return saveToy
//     } catch (err) {
//         console.log('Toy action -> Cannot save toy', err)
//         throw err
//     }
// }

// export function setFilterBy(filterBy) {
//     store.dispatch({ type: SET_FILTER_BY, filterBy })
// }

// export function setSortBy(sortBy) {
//     store.dispatch({ type: SET_SORT_BY, sortBy })
// }




import { toyService } from "../../services/toy.service.js"
import { store } from "../store.js"
import { SET_TOYS, REMOVE_TOY, ADD_TOY, UPDATE_TOY, SET_FILTERBY, SET_SORTBY } from "../reducers/toy.reducer.js"

// export function loadToys(filterBy, sort) {
//     return toyService.query(filterBy, sort)
//         .then(toys => {
//             store.dispatch({ type: SET_TOYS, toys })
//         })
//         .catch(err => {
//             console.log('cannot load toys, heres why:', err)
//             throw err
//         })
// }

// export function removeToy(toyId) {
//     return toyService.remove(toyId)
//         .then(() => {
//             store.dispatch({ type: REMOVE_TOY, toyId })
//         })
//         .catch(err => {
//             console.log('cannot remove toy, heres why:', err)
//             throw err
//         })
// }

// export function saveToy(toy) {
//     const type = (!toy._id) ? ADD_TOY : UPDATE_TOY
//     return toyService.save(toy)
//         .then(savedToy => {
//             return store.dispatch({ type, toy: savedToy })
//         })
//         .catch(err => {
//             console.log('cannot save toy, heres why:', err)
//             throw err
//         })
// }

// export function setFilterBy(filterBy) {
//     store.dispatch({ type: SET_FILTERBY, filterBy })
// }
// export function setSortBy(sortBy) {
//     store.dispatch({ type: SET_SORTBY, sortBy })
// }

export async function loadToys() {
    const { filterBy, sortBy } = store.getState().toyModule
    store.dispatch({ type: SET_IS_LOADING, isLoading: true })

    try {
        const toys = await toyService.query(filterBy, sortBy)
        store.dispatch({ type: SET_TOYS, toys })
    } catch (err) {
        console.log('Toy action -> Cannot load toys', err)
        throw err
    } finally {
        store.dispatch({ type: SET_IS_LOADING, isLoading: false })
    }
}

export async function removeToy(toyId) {
    try {
        await toyService.remove(toyId)
        store.dispatch({ type: REMOVE_TOY, toyId })
    } catch (err) {
        console.log('Toy action -> Cannot remove toy', err)
        throw err
    }
}

export async function saveToy(toy) {
    const type = toy._id ? UPDATE_TOY : ADD_TOY

    try {
        const savedToy = await toyService.save(toy)
        store.dispatch({ type, toy: savedToy })
        return saveToy
    } catch (err) {
        console.log('Toy action -> Cannot save toy', err)
        throw err
    }
}

export function setFilterBy(filterBy) {
    store.dispatch({ type: SET_FILTERBY, filterBy })
}

export function setSortBy(sortBy) {
    store.dispatch({ type: SET_SORTBY, sortBy })
}
