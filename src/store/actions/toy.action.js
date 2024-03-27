import { toyService } from "../../services/toy.service.js"
import { store } from "../store.js"
import { SET_TOYS, REMOVE_TOY, ADD_TOY, UPDATE_TOY, SET_FILTERBY, SET_SORTBY } from "../reducers/toy.reducer.js"

export function loadToys(filterBy, sort) {
    return toyService.query(filterBy, sort)
        .then(toys => {
            store.dispatch({ type: SET_TOYS, toys })
        })
        .catch(err => {
            console.log('cannot load toys, heres why:', err)
            throw err
        })
}

export function removeToy(toyId) {
    return toyService.remove(toyId)
        .then(() => {
            store.dispatch({ type: REMOVE_TOY, toyId })
        })
        .catch(err => {
            console.log('cannot remove toy, heres why:', err)
            throw err
        })
}

export function saveToy(toy) {
    const type = (!toy._id) ? ADD_TOY : UPDATE_TOY
    return toyService.save(toy)
        .then(savedToy => {
            return store.dispatch({ type, toy: savedToy })
        })
        .catch(err => {
            console.log('cannot save toy, heres why:', err)
            throw err
        })
}

export function setFilterBy(filterBy) {
    store.dispatch({ type: SET_FILTERBY, filterBy })
}
export function setSortBy(sortBy) {
    store.dispatch({ type: SET_SORTBY, sortBy })
}
