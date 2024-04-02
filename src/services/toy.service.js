import { httpService } from './http.service'
import { utilService } from '../services/util.service'

const BASE_URL = 'toy/'
const labels = ['Doll', 'Art', 'Battery Powered', 'Talking', 'Beauty', 'Girls', 'Animal', 'Trip', 'Sport', 'Ride']
const urls = ['https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80', 'https://images.unsplash.com/photo-1633469924738-52101af51d87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80', 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80']


export const toyService = {
    query,
    remove,
    getById,
    save,
    getDefaultFilter,
    getEmptyToy,
    addMsg,
    removeMsg,
    getPricesPerLabelMap,
    getInStockByLabel,
    getSalesStats,
}

async function query(filterBy = {}) {
    return httpService.get(BASE_URL, filterBy)
}

async function remove(toyId) {
    return httpService.delete(BASE_URL + toyId)
}

async function getById(toyId) {
    return httpService.get(BASE_URL + toyId)
}

async function save(toy) {
    let savedToy
    if (toy._id) {
        savedToy = await httpService.put(BASE_URL + toy._id, toy)
    } else {
        savedToy = await httpService.post(BASE_URL, toy)
    }
    return savedToy
}

async function addMsg(toyId, txt) {
    // console.log('toyId',toyId , txt)
    const savedMsg = await httpService.post(`toy/${toyId}/msg`, { txt })
    return savedMsg
}

async function removeMsg(toyId, msgId) {
    const removedId = await httpService.delete(`toy/${toyId}/msg/${msgId}`)
    return removedId
}

function getDefaultFilter() {
    return { byName: '', inStock: '', byLable: [], sortBy: '' }
}

function getEmptyToy() {
    let labelIdx = utilService.getRandomIntInclusive(0, labels.length - 1)
    let imgIdx = utilService.getRandomIntInclusive(0, urls.length - 1)
    return {
        name: '',
        price: '',
        createdAt: Date.now(),
        labels: [labels[labelIdx], 'Art'],
        inStock: true,
        img: urls[imgIdx],
        msgs: []
    }
}

function getPricesPerLabelMap(toys) {
    const pricesPerLabelMap = toys.reduce((map, toy) => {
        toy.labels.forEach(label => {
            map[label] = map[label] ? map[label] + toy.price : toy.price
        })

        return map
    }, {})

    return pricesPerLabelMap
}

function getInStockByLabel(toys) {
    const inStockPerLabelMap = toys.reduce((map, toy) => {
        toy.labels.forEach(label => {
            if (!map[label]) map[label] = 0
            map[label]++
        })

        return map
    }, {})

    return inStockPerLabelMap
}

function getSalesStats() {
    return _createDemoSales()
}

function _createDemoSales() {
    const months = ['June', 'July', 'August', 'September', 'October', 'November']
    const sales = [1000, 4134, 3214, 2451, 3000, 4672]

    return { months, sales }
}



//msg example
// {
//     id: 'm101',
//     txt: 'Great toy, how much',
//     by: {
//     _id: 'u101',
//     fullname: 'Puki Ga'
//     }
// }
