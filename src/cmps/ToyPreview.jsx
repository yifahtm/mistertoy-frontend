// import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'

// export function ToyPreview({ toy, onRemoveToy }) {
//     const user = useSelector(storeState => storeState.userModule.loggedInUser)

//     function getIsInStock(toy) {
//         if (toy.inStock) return 'In stock'
//         return 'Out of stock'
//     }

//     function getStockClass(toy) {
//         if (!toy.inStock) return 'out-stock'
//         return ''
//     }

//     return (
//         <article className="toy-preview flex column align-center">
//             <h4 className="toy-name">{toy.name}</h4>

//             <div className="toy-desc-container flex column align-center">
//                 <p className="toy-price">${toy.price}</p>
//                 <p className={`toy-stock ${getStockClass(toy)}`}>{getIsInStock(toy)}</p>
//             </div>

//             <img className="toy-img" src={`https://robohash.org/${toy.name}?set=set1`} alt="" />

//             <div className="actions-container flex">
//                 <Link to={`/toy/${toy._id}`}>
//                     <button className="btn details"></button>
//                 </Link>

//                 {user && user.isAdmin && (
//                     <>
//                         <button className="btn remove" onClick={() => onRemoveToy(toy._id)}></button>
//                         <Link to={`/toy/edit/${toy._id}`}>
//                             <button className="btn edit"></button>
//                         </Link>
//                     </>
//                 )}
//             </div>
//         </article>
//     )
// }





import React from 'react'
import { NavLink } from 'react-router-dom'

export function ToyPreview({ toy, onRemove }) {
    return (<>
        <button onClick={() => onRemove(toy._id)} className="btn-remove">X</button>
        <div className='toy-name'>
            {toy.name}
        </div>
        <div className='toy-labels'>
            {toy.labels.map(label => (<span key={label}>{label}</span>))}
        </div>

        <img src={`https://robohash.org/${toy.name}?set=set2`} alt="" />

        <div>
            In Stock: {(toy.inStock) ? 'Yes' : 'No'}
        </div>
        <div>
            Price: {`${toy.price}`}
        </div>
    </>

    )
}
