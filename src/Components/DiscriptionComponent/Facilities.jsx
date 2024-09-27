import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWifi,faPlug,faWater,faTv,faCarSide,faBath,faFan,faDumbbell,faPeopleRoof,faFireBurner,faHouseChimney} from '@fortawesome/free-solid-svg-icons'

const Facilities = (props) => {
    return (
        <div className='p-4 w-11/12 mt-12 ml-20 shadow-lg'>
            <div className="font-bold text-2xl mb-4">Facilities</div>
            <ul className='flex text-lg flex-wrap'>
                {props.data?.electricity ? <li className='w-1/5 my-2'><FontAwesomeIcon icon={faPlug} /> Electricity</li> :<></>}
                {props.data?.water ? <li className='w-1/5 my-2'><FontAwesomeIcon icon={faWater} /> Water</li> : <></>}
                {props.data?.gas ? <li className='w-1/5 my-2'><FontAwesomeIcon icon={faHouseChimney} /> Gas</li>:<></>}
                {props.data?.tv ?<li className='w-1/5 my-2'><FontAwesomeIcon icon={faTv} /> TV</li>:<></>}
                {props.data?.parking ? <li className='w-1/5 my-2'><FontAwesomeIcon icon={faCarSide} /> Parking</li>:<></>}
                {props.data?.bath ? <li className='w-1/5 my-2'><FontAwesomeIcon icon={faBath} /> Bath</li>:<></>}
                {props.data?.ac ? <li className='w-1/5 my-2'><FontAwesomeIcon icon={faFan} /> AC</li>:<></>}
                {props.data?.stove ? <li className='w-1/5 my-2'><FontAwesomeIcon icon={faFireBurner} /> Stove</li>:<></>}
                {props.data?.wifi ? <li className='w-1/5 my-2'><FontAwesomeIcon icon={faWifi} /> WiFi</li>:<></>}
                {props.data?.gym ? <li className='w-1/5 my-2'><FontAwesomeIcon icon={faDumbbell} /> Gym</li>:<></>}
                {props.data?.fridge ? <li className='w-1/5 my-2'><FontAwesomeIcon icon={faPeopleRoof} />Refridgerator </li>:<></>}
                {props.data?.roof ? <li className='w-1/5 my-2'><FontAwesomeIcon icon={faPeopleRoof} /> Roof Top</li>:<></>}
                {props.data?.pets ? <li className='w-1/5 my-2'><FontAwesomeIcon icon={faPeopleRoof} /> Pets</li>:<></>}
                {props.data?.closet ? <li className='w-1/5 my-2'><FontAwesomeIcon icon={faPeopleRoof} /> Closet</li>:<></>}
                {props.data?.balcony ? <li className='w-1/5 my-2'><FontAwesomeIcon icon={faPeopleRoof} /> Balcony</li> :<></>}
            </ul>
        </div>
    )
}

export default Facilities