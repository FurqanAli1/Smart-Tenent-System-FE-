import React from 'react'

const ContactTable = (props) => {
    console.log(props.data)
    return (
        <tr className="border-bottom capitalize">
            <td className='px-6 p-2'>{props.data?.user.name}</td>
            <td className='px-6 p-2'>{props.data?.user.email}</td>
            <td className='px-6 p-2 '>{props.data?.tittle}</td>
            <td className='px-6 p-2 '>{props.data?.review}</td>
        </tr>
    )
}

export default ContactTable