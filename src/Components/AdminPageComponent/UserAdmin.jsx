import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const UserAdmin = (props) => {
    const nav =useNavigate()
    const getId = () => {
        const _id= props.data?._id
                
    }
    return (
        <div onClick={getId} className="w-1/2 h-40 p-2 my-4 px-8">
            <Link className="block rounded overflow-hidden">
                <img
                    className="object-cover object-center h-40 w-full" // Reduce the height by 5 times (from h-40 to h-8)
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                    alt="CEO Sarah Smith"
                />
            </Link>
        </div>
    )
}

export default UserAdmin