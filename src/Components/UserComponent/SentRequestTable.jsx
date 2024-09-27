import React from 'react'

const SentRequestTable = (props) => {

    return (
        <tr>
            <td class="px-4 py-2 text-bold whitespace-nowrap">{props.data?.Address}</td>
            <td class="px-8 py-2 capitalize whitespace-nowrap">{props.data?.city}</td>
            <td class="px-10 py-2 ml-4 whitespace-nowrap">Rs. {props.data?.propertyRent}</td>
            <td class="px-4 py-2 whitespace-nowrap">
                <td class="px-4 py-2 whitespace-nowrap font-bold capitalize text-lg font-medium">
                    {
                        props.data?.status==="Pending" ? 
                        <span style={{color:"green"}}>{props.data?.status}</span> 
                        : 
                        props.data?.status==="approved" ?
                        <span style={{color:"BLUE"}}>{props.data?.status}</span> 
                        :
                        <span style={{color:"red"}}>{props.data?.status}</span> 
                    }
                </td>
            </td>
        </tr>
    )
}

export default SentRequestTable