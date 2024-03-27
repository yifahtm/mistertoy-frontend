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
