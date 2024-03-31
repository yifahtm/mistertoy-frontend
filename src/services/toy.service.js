// import { storageService } from './async-storage.service.js'
// import { httpService } from './http.service.js'
// import { utilService } from './util.service.js'

// const STORAGE_KEY = 'toyDB'
// const BASE_URL = 'toy/'
// // _createToys()

// export const toyService = {
//     query,
//     getById,
//     save,
//     remove,
//     addToyMsg,
//     getEmptyToy,
//     getDefaultFilter,
//     getDefaultSort,
//     getLabels,
//     getPricesPerLabelMap,
//     getInStockByLabel,
//     getSalesStats,
//     getStoreBranches,
// }

// function query(filterBy = { name: '' }, sortBy = { name: 1 }) {
//     return httpService.get(BASE_URL, { filterBy, sortBy })

//     // return storageService.query(STORAGE_KEY).then(toys => {
//     //   let toysToReturn = toys.slice()

//     //   if (filterBy.name) {
//     //     const regExp = new RegExp(filterBy.name, 'i')
//     //     toysToReturn = toysToReturn.filter(toy => regExp.test(toy.name))
//     //   }

//     //   if (filterBy.inStock !== null) {
//     //     switch (filterBy.inStock) {
//     //       case true:
//     //         toysToReturn = toysToReturn.filter(toy => toy.inStock)
//     //         break

//     //       case false:
//     //         toysToReturn = toysToReturn.filter(toy => !toy.inStock)
//     //         break
//     //     }
//     //   }

//     //   toysToReturn = _sortToys(toysToReturn, sortBy)

//     //   return toysToReturn
//     // })
// }

// function getById(toyId) {
//     return httpService.get(BASE_URL + toyId)
//     // return storageService.get(STORAGE_KEY, toyId)
// }

// function remove(toyId) {
//     return httpService.delete(BASE_URL + toyId)
//     // return storageService.remove(STORAGE_KEY, toyId)
// }

// function save(toy) {
//     if (toy._id) {
//         return httpService.put(BASE_URL + toy._id, toy)
//         // return storageService.put(STORAGE_KEY, toy)
//     } else {
//         return httpService.post(BASE_URL, toy)
//         // return storageService.post(STORAGE_KEY, toy)
//     }
// }

// function addToyMsg(toy, msg) {
//     return httpService.post(BASE_URL + toy._id + '/msg', { txt: msg })
// }

// function getEmptyToy() {
//     return {
//         name: '',
//         price: 0,
//         labels: [],
//         inStock: true,
//     }
// }

// function getDefaultFilter() {
//     return { name: '', inStock: null, labels: [], maxPrice: 0 }
// }

// function getDefaultSort() {
//     return { name: 1 }
// }

// function getLabels() {
//     const labels = [
//         'On wheels',
//         'Box game',
//         'Art',
//         'Baby',
//         'Doll',
//         'Puzzle',
//         'Outdoor',
//         'Battery Powered',
//     ]
//     return labels
// }

// function getPricesPerLabelMap(toys) {
//     const pricesPerLabelMap = toys.reduce((map, toy) => {
//         toy.labels.forEach(label => {
//             map[label] = map[label] ? map[label] + toy.price : toy.price
//         })

//         return map
//     }, {})

//     return pricesPerLabelMap
// }

// function getInStockByLabel(toys) {
//     const inStockPerLabelMap = toys.reduce((map, toy) => {
//         toy.labels.forEach(label => {
//             if (!map[label]) map[label] = 0
//             map[label]++
//         })

//         return map
//     }, {})

//     return inStockPerLabelMap
// }

// function getSalesStats() {
//     return _createDemoSales()
// }

// function getStoreBranches() {
//     return _createDemoBranches()
// }

// ////////////////////////////////////////////////////

// function _createToy(name = '') {
//     const toy = getEmptyToy()
//     const labels = _getLabels()

//     toy._id = utilService.makeId()
//     toy.name = name
//     toy.price = utilService.getRandomIntInclusive(20, 150)
//     toy.createdAt = Date.now()
//     toy.inStock = Math.random() > 0.3

//     while (toy.labels.length < 3) {
//         const rndLabel = labels[utilService.getRandomIntInclusive(0, labels.length - 1)]
//         if (!toy.labels.includes(rndLabel)) toy.labels.push(rndLabel)
//     }

//     return toy
// }

// function _createToys() {
//     let toys = utilService.loadFromStorage(STORAGE_KEY)
//     if (!toys || !toys.length) {
//         toys = []
//         toys.push(_createToy('Bobo'))
//         toys.push(_createToy('Popo'))
//         toys.push(_createToy('Lala'))
//         toys.push(_createToy('Iron man'))
//         toys.push(_createToy('Superman'))
//         utilService.saveToStorage(STORAGE_KEY, toys)
//     }
// }

// function _sortToys(toys, sortBy) {
//     if (sortBy.name) {
//         toys = toys.sort((t1, t2) => t1.name.localeCompare(t2.name) * sortBy.name)
//     }

//     if (sortBy.price) {
//         toys = toys.sort((t1, t2) => (t1.price - t2.price) * sortBy.price)
//     }

//     if (sortBy.createdAt) {
//         toys = toys.sort((t1, t2) => (t1.createdAt - t2.createdAt) * sortBy.createdAt)
//     }

//     return toys
// }

// function _createDemoSales() {
//     const months = ['June', 'July', 'August', 'September', 'October', 'November']
//     const sales = [1000, 4134, 3214, 2451, 3000, 4672]

//     return { months, sales }
// }

// function _createDemoBranches() {
//     const branch1 = { lat: 32.073591208159584, lng: 34.79064056091309 }
//     const branch2 = { lat: 32.07511852692997, lng: 34.80867017793204 }
//     const branch3 = { lat: 32.06799082105589, lng: 34.82506383943107 }
//     const branch4 = { lat: 32.08493626238524, lng: 34.83504682410127 }

//     return [branch1, branch2, branch3, branch4]
// }








import { httpService } from './http.service'

export const toyService = {
    query,
    getById,
    remove,
    save,
    getEmptyToy,
    getDefaultFilterBy,
    getDefaultSort,
    getLabels
}

const labels = ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor", "Battery Powered"]






// import { dbService } from './db.service.js'

// import mongoDB from 'mongodb'
// const { ObjectId } = mongoDB


// export const customerService = {
//     query,
//     getById,
//     remove,
//     update,
//     add
// }

// async function query(filterBy = { name: 'o' }) {
//     const criteria = {}
//     if (filterBy.name) {
//         const regex = new RegExp(filterBy.name, 'i')
//         criteria.fullName = { $regex: regex }
//     }
//     if (filterBy.minPrice) {
//         criteria.price = { $gte: filterBy.minPrice }
//     }
//     try {
//         const collection = await dbService.getCollection('customer')
//         const toys = await collection.find(criteria).toArray()
//         return toys
//     } catch (err) {
//         console.log('ERROR: cannot find toys')
//         throw err
//     }
// }

// async function getById(toyId) {
//     try {
//         const collection = await dbService.getCollection('toy')
//         const toy = await collection.findOne({ _id: ObjectId(toyId) })
//         return toy
//     } catch (err) {
//         console.log(`ERROR: cannot find toy ${toyId}`)
//         throw err
//     }
// }

// async function remove(toyId) {
//     try {
//         const collection = await dbService.getCollection('toy')
//         return await collection.deleteOne({ _id: ObjectId(toyId) })
//     } catch (err) {
//         console.log(`ERROR: cannot remove toy ${toyId}`)
//         throw err
//     }
// }

// async function update(toy) {
//     try {
//         const collection = await dbService.getCollection('toy')
//         await collection.updateOne({ _id: ObjectId(toy._id) }, { $set: toy })
//         return toy
//     } catch (err) {
//         console.log(`ERROR: cannot update toy ${toy._id}`)
//         throw err
//     }
// }

// async function add(toy) {
//     try {
//         const collection = await dbService.getCollection('toy')
//         await collection.insertOne(toy)
//         return toy
//     } catch (err) {
//         console.log(`ERROR: cannot toy`)
//         throw err
//     }
// }






function query(filterBy, sort) {
    return httpService.get('toy', { params: { filterBy, sort } })
}

function getLabels() {
    return [...labels]
}

function getById(toyId) {
    return httpService.get(`toy/${toyId}`)
}

function remove(toyId) {
    return httpService.delete(`toy/${toyId}`)
}

function save(toy) {
    if (toy._id) {
        return httpService.put(`toy/${toy._id}`, toy)
    } else {
        return httpService.post('toy', toy)
    }
}

function getEmptyToy() {
    return {
        name: '',
        price: '',
        labels: [],
        inStock: 'true'
    }
}

function getDefaultFilterBy() {
    return {
        txt: '',
        maxPrice: Infinity,
        labels: [],
        inStock: null
    }
}

function getDefaultSort() {
    return {
        // 
        by: 'name',
        asc: true
    }
}
