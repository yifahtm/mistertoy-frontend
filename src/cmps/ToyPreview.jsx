import { Link } from "react-router-dom";
import { uploadImg } from "../services/cloudinary-service.js"

export function ToyPreview({ toy }) {

    const { name, inStock, price } = toy
    return (
        <section className="toy-detail-preview">
            <img src={uploadImg} alt="toy"></img>
            <h1>{name}</h1>
            <h3>{price}$</h3>
            <h3>{(inStock) ? 'In stock' : 'Not in stock'}</h3>
        </section>
    )
}