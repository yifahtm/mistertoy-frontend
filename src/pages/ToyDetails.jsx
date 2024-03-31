// import { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import { Link, useNavigate, useParams } from 'react-router-dom'

// import { toyService } from '../services/toy.service'
// import { showErrorMsg } from '../services/event-bus.service'
// import { ToyMsg } from '../cmps/ToyMsg'

// export function ToyDetails() {
//     const [toy, setToy] = useState(null)
//     const { toyId } = useParams()
//     const navigate = useNavigate()

//     useEffect(() => {
//         if (toyId) loadToy()
//     }, [toyId])

//     async function loadToy() {
//         try {
//             const toy = await toyService.getById(toyId)
//             setToy(toy)
//         } catch (err) {
//             console.error('Had issues with loading toy details', err)
//             showErrorMsg("Could not load toy's details")
//             navigate('/toy')
//         }
//     }

//     function getIsInStock(toy) {
//         if (toy.inStock) return 'In stock'
//         return 'Out of stock'
//     }

//     function getStockClass(toy) {
//         if (!toy.inStock) return 'out-stock'
//         return ''
//     }

//     if (!toy) return <div className="loading-msg">Loading details...</div>
//     return (
//         <section className="toy-details">
//             <Link to={`/toy`}>
//                 <button className="btn-back"></button>
//             </Link>

//             <div className="main-container flex">
//                 <div className="details-container flex column">
//                     <h1 className="toy-name">Toy name : {toy.name}</h1>
//                     <h5 className="toy-price">Price: ${toy.price}</h5>
//                     <ul className="toy-labels flex clean-list">
//                         {toy.labels.map((label, idx) => (
//                             <li key={`${label + idx}`} className="label">
//                                 {label}
//                             </li>
//                         ))}
//                     </ul>

//                     <p className="toy-desc">{toy.description}</p>
//                     <p className={`toy-stock ${getStockClass(toy)}`}>{getIsInStock(toy)}</p>
//                 </div>

//                 <img className="toy-img" src={`https://robohash.org/${toy.name}?set=set1`} alt="" />
//             </div>

//             <ToyMsg toy={toy} setToy={setToy} />
//         </section>
//     )
// }






import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"

import { showErrorMsg } from '../services/event-bus.service'
import { toyService } from '../services/toy.service'

export function ToyDetails() {
    const [toy, setToy] = useState(null)

    const { toyId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadToy()
    })

    function loadToy() {
        toyService.getById(toyId)
            .then(setToy)
            .catch((err) => {
                showErrorMsg('Cant load toy')
                navigate('/toy')
            })
    }

    if (!toy) return <div>Loading...</div>
    return (
        <div className="toy-details">
            <h2>Name: <span>{toy.name}</span></h2>
            <h2>Price: <span>{toy.price}</span></h2>
            <h2>labels: <span>{toy.labels.join(' | ')}</span></h2>
            <h2>Created at: <span>{toy.createdAt}</span></h2>
            <h2>In Stock: <span>{(toy.inStock) ? 'yes' : 'no'}</span></h2>
        </div>
    )
}



