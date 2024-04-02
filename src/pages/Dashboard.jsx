import { useSelector } from "react-redux";
import { ToyChart } from "../cmps/Chart";
import { BarChart } from "../cmps/BarChart";
import { LineChart } from "../cmps/LineChart";
import { PieChart } from "../cmps/PieChart";


export function Dashboard() {
    const toys = useSelector(storeState => storeState.toyModule.toys)
    console.log(toys)
    const labelCounts = {}
    console.log('toys', toys)
    toys.forEach(toy => {
        console.log(toy)
        toy.labels?.forEach(label => {
            console.log('label', label)
            labelCounts[label] = (labelCounts[label] || 0) + 1
        })
    })
    return (
        <section className="dashboard-container">
            <h1>Labels chart:</h1>
            <ToyChart labelCounts={labelCounts} />
            <BarChart toys={toys} />
            <LineChart labelCounts={labelCounts} />
            <PieChart toys={toys} />
        </section>
    )
}