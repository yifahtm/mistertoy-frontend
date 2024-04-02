import { SimpleMap } from '../cmps/StoreLocation'

export function About() {
    return (
        <section className="about">
            <div className="about-details">
                <h1>About Us</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
                    fugiat perferendis perspiciatis enim, voluptatibus delectus placeat
                    nulla facilis. Praesentium tempore magni at rem consectetur
                    consequuntur reprehenderit libero incidunt odio molestiae! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Doloremque fugiat
                    perferendis perspiciatis enim, voluptatibus delectus placeat nulla
                    facilis. Praesentium tempore magni at rem consectetur consequuntur
                    reprehenderit libero incidunt odio molestiae!
                </p>
            </div>
            <SimpleMap />
        </section>
    )
}
