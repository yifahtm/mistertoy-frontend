import { toyService } from "../../services/toy.service"

export const SET_FILTER = 'SET_FILTER'
export const SET_TOYS = 'SET_TOYS'
export const REMOVE_TOY = 'REMOVE_TOY'
export const SET_LABLES = 'SET_LABLES'
export const ADD_TOY = 'ADD_TOY'
export const UPDATE_TOY = 'UPDATE_TOY'
export const TOY_UNDO = 'TOY_UNDO'
export const SET_IS_LOADING = 'SET_IS_LOADING'


const initialState = {
    filterBy: toyService.getDefaultFilter(),
    isLoading: false,
    toys: [],
    lastToys: [],
    lables: ['Doll', 'Art', 'Battery Powered', 'Talking', 'Beauty', 'Girls', 'Animal', 'Trip', 'Sport', 'Ride']
}

export function toyReducer(state = initialState, action) {
    let toys
    let lastToys
    switch (action.type) {
        case SET_TOYS:
            lastToys = [...action.toys]
            return { ...state, toys: action.toys, lastToys }
        case SET_FILTER:
            return { ...state, filterBy: { ...action.filterBy } }
        case UPDATE_TOY:
            toys = state.toys.map(toy => toy._id === action.toy._id ? action.toy : toy)
            return { ...state, toys }
        case ADD_TOY:
            toys = [...state.toys, action.toy]
            return { ...state, toys }
        case REMOVE_TOY:
            lastToys = [...state.toys]
            toys = state.toys.filter(toy => toy._id !== action.toyId)
            return { ...state, toys, lastToys }
        case TOY_UNDO:
            toys = [...state.lastToys]
            return { ...state, toys }
        case SET_IS_LOADING:
            return { ...state, isLoading: action.isLoading }
        default:
            return state
    }
}

