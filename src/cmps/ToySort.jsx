import React from 'react'

export function ToySort({ sortBy, onSetSort }) {

    function handleSortChange(by) {
        const updatedSort = { ...sortBy, by }
        onSetSort(updatedSort)
    }

    function handleToggleDirection() {
        const updatedSort = { ...sortBy, asc: !sortBy.asc }
        console.log("🚀 ~ file: ToySort.jsx:12 ~ handleToggleDirection ~ updatedSort:", updatedSort)
        onSetSort(updatedSort)
    }

    return <section className="toy-sort">
        <h3>Sort toys:</h3>
        <button onClick={() => handleSortChange('name')}>By name</button>
        <button onClick={() => handleSortChange('price')}>By price</button>
        <button onClick={handleToggleDirection}>Change direction {sortBy.asc ? '^' : 'v'}</button>
    </section>
}