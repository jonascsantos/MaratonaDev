import React from "react"

function DonorItem(props){
    return (
        <div className="donor">
            <div className="blood">{props.donor.blood}</div>
            <p>{props.donor.name}</p>
        </div>
    );
}

export default DonorItem;