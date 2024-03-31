// export function HomePage() {
//     return (
//         <section className="home-page">
//             <h1>Home page</h1>
//             <p>
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nobis, numquam soluta rem
//                 iusto commodi, iste fuga quasi deleniti officiis quidem tempore eius reprehenderit eos,
//                 vitae omnis praesentium iure impedit!
//             </p>
//         </section>
//     )
// }




import React from 'react'
import img from '../assets/img/react2.svg'



export function HomePage() {
    return <section>
        <h1>Home page for <strong>Poki</strong> toys!</h1>
        <div>
            <img src={img} />
        </div>
    </section>
}