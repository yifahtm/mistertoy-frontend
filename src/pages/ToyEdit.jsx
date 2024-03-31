// import { useEffect, useState } from 'react'
// import { Link, useNavigate, useParams } from 'react-router-dom'

// import { toyService } from '../services/toy.service'
// import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'

// import { saveToy } from '../store/actions/toy.actions'

// export function ToyEdit() {
//     const [toyToEdit, setToyToEdit] = useState(toyService.getEmptyToy())
//     const { toyId } = useParams()
//     const navigate = useNavigate()

//     useEffect(() => {
//         if (toyId) loadToy()
//     }, [toyId])

//     async function loadToy() {
//         try {
//             const toy = await toyService.getById(toyId)
//             setToyToEdit(toy)
//         } catch (err) {
//             console.error('Had issues with loading toy details', err)
//             showErrorMsg("Could not load toy's details")
//             navigate('/toy')
//         }
//     }

//     function handleChange({ target }) {
//         let { value, name: field, type } = target
//         if (type === 'number') value = +value
//         if (type === 'checkbox') value = value === 'true' ? false : true
//         setToyToEdit(prevToy => ({ ...prevToy, [field]: value }))
//     }

//     async function onSaveToy(ev) {
//         ev.preventDefault()

//         // Dummy details in case the user don't fill them (For dev purposes)
//         if (!toyToEdit.name) toyToEdit.name = 'Anonymous toy'
//         if (!toyToEdit.price) toyToEdit.price = 100

//         try {
//             await saveToy(toyToEdit)
//             showSuccessMsg('Toy Saved!')
//             navigate('/toy')
//         } catch (err) {
//             console.error('Had issues in saving toy', err)
//             showErrorMsg('Had issues in saving toy')
//         }
//     }

//     return (
//         <section className="toy-edit flex column align-center">
//             <h2>{toyToEdit._id ? 'Edit' : 'Add'} toy</h2>

//             <form onSubmit={onSaveToy} className="flex column align-center">
//                 <div className="inputs-container flex column align-center">
//                     <div className="input-container flex align-center justify-between">
//                         <label htmlFor="name">Name: </label>
//                         <input
//                             type="text"
//                             name="name"
//                             id="name"
//                             placeholder="Enter new name"
//                             value={toyToEdit.name}
//                             onChange={handleChange}
//                         />
//                     </div>

//                     <div className="input-container flex align-center justify-between">
//                         <label htmlFor="price">Price: </label>
//                         <input
//                             type="number"
//                             name="price"
//                             id="price"
//                             placeholder="Enter new price"
//                             value={toyToEdit.price || ''}
//                             onChange={handleChange}
//                         />
//                     </div>

//                     <div className="input-container stock flex align-center">
//                         {' '}
//                         <label htmlFor="inStock">In stock: </label>
//                         <input
//                             type="checkbox"
//                             name="inStock"
//                             id="inStock"
//                             checked={toyToEdit.inStock}
//                             value={toyToEdit.inStock}
//                             onChange={handleChange}
//                         />
//                     </div>
//                 </div>

//                 <div className="actions-container flex">
//                     <button className="btn btn-save">{toyToEdit._id ? 'Save' : 'Add'}</button>
//                     <Link to="/toy">
//                         <button className="btn btn-cancel">Cancel</button>
//                     </Link>
//                 </div>
//             </form>
//         </section>
//     )
// }





import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { MultiSelect } from '../cmps/MultiSelect';
import { toyService } from '../services/toy.service'
import { saveToy } from "../store/actions/toy.action"
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service';

export function ToyEdit() {
    const [toyToEdit, setToyToEdit] = useState(toyService.getEmptyToy())

    const { toyId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (!toyId) return
        toyService.getById(toyId).then(toy => {
            setToyToEdit(toy)
        })
    }, [])

    function handleChange(ev) {
        const field = ev.target.name
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
        setToyToEdit(prevToy => ({ ...prevToy, [field]: value }))
    }

    function onSetLabel(label) {
        const labels = toyToEdit.labels.includes(label) ? toyToEdit.labels.filter(l => l !== label) : [label, ...toyToEdit.labels]
        setToyToEdit(prevToy => ({ ...prevToy, labels }))
    }

    function onSave(ev) {
        ev.preventDefault()

        const newToy = {
            ...toyToEdit,
            inStock: (toyToEdit.inStock === 'true') ? true : false
        }

        saveToy(newToy)
            .then(() => {
                showSuccessMsg('Toy saved successfully')
                navigate('/toy')
            })
            .catch(err => {
                showErrorMsg('Can not save toy, please try again')
            })
    }

    function isInStock() {
        return toyToEdit.inStock
    }

    if (!toyToEdit) return <div>Loading...</div>

    return (
        <form onSubmit={onSave} className="container edit-form" action="">
            <div>
                <label>
                    <span>Name</span>
                    <input
                        className="edit-input name-input"
                        value={toyToEdit.name}
                        onChange={handleChange}
                        type="text"
                        name="name" />
                </label>
            </div>
            <div>
                <label>
                    <span>Price</span>
                    <input
                        className="edit-input price-input"
                        value={toyToEdit.price}
                        onChange={handleChange}
                        type="number"
                        name="price" />
                </label>
            </div>
            <div>
                <MultiSelect onSetLabel={onSetLabel} toyToEdit={toyToEdit} />
                {/* <select value={toyToEdit.type || '1'} onChange={handleChange} name="type" className='edit-input'>
                    <option value={'1'} disabled>
                        Type
                    </option>
                    <option value="Funny">Funny</option>
                    <option value="Adult">Adult</option>
                    <option value="Educational">Educational</option>
                </select> */}
            </div>
            <div>
                <select value={isInStock()} onChange={handleChange} name="inStock" className='edit-input'>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </div>
            <button onClick={onSave} className="save-toy-btn">Save</button>
        </form>
    )
}