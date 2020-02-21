import React from "react"
import ReactDOM from "react-dom"
import DonorItem from "./DonorItem"
import donorsData from "../donorsData"

class Donors extends React.Component {
    constructor(){
        super()
        this.state = {
            donors: donorsData
        }
    }
    
    render(){
        const donorsGroup = this.state.donors.map(donor => 
            <DonorItem 
                key={donor.id} 
                donor={donor}
            />)

        return(
            <div>
                <h2>Últimos <span>doadores</span></h2>
                <section className="donors">
                    {donorsGroup}
                </section>
            </div>
        );
    }
}

export default Donors;