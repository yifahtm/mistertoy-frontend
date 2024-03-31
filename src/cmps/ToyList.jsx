// import { ToyPreview } from './ToyPreview'

// export function ToyList({ toys, onRemoveToy }) {
//     return (
//         <section className="toy-list ">
//             <ul className="clean-list list-layout">
//                 {toys.map(toy => (
//                     <li key={toy._id}>
//                         <ToyPreview toy={toy} onRemoveToy={onRemoveToy} />
//                     </li>
//                 ))}
//             </ul>
//         </section>
//     )
// }





import React from 'react'
import { ToyPreview } from './ToyPreview'
import { NavLink } from 'react-router-dom';

export function ToyList({ toys, onRemove }) {
    return (
        <div className="toy-list">
            {
                toys.map(toy =>
                    <div className="toy-card" key={toy._id}>

                        <ToyPreview toy={toy} onRemove={onRemove} />

                        <section className="toy-prev-btns">
                            <NavLink to={`/toy/edit/${toy._id}`}>Edit</NavLink>
                            <NavLink to={`/toy/details/${toy._id}`}>Details</NavLink>
                        </section>
                    </div>
                )}
        </div>
    )
}
