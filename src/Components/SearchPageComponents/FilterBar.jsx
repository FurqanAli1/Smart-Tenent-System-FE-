import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FilterBar = (props) => {

  const [price, setPrice] = useState()
  const [profession, setProfession] = useState()
  const [bed, setBed] = useState(false)
  const [ac, setAc] = useState(false)
  const [parking, setParking] = useState(false)
  const [wifi, setWifi] = useState(false)
  const [tv, setTv] = useState(false)

  async function getFiltered() {
    const filter = await axios.get("http://localhost:5000/user/filterBar",{price,profession,bed,ac,parking,wifi,tv})
    alert(filter.data)
  }
  return (
    <div>
      <div>
        <h1 className='text-2xl'>Filters</h1>
        <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Price</h3>
        <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div class="flex items-center ps-3">
              <input id="list-radio-license" type="radio" value={price} onClick={(e) => { setPrice(5000) }} name="priceradio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
              <label for="list-radio-license" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rs.5000</label>
            </div>
          </li>
          <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div class="flex items-center ps-3">
              <input id="list-radio-id" type="radio" value={price} onClick={(e) => { setPrice(10000) }} name="priceradio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
              <label for="list-radio-id" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rs.10000</label>
            </div>
          </li>
          <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div class="flex items-center ps-3">
              <input id="list-radio-military" type="radio" value={price} onClick={(e) => { setPrice(15000) }} name="priceradio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
              <label for="list-radio-military" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rs.15000</label>
            </div>
          </li>
          <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div class="flex items-center ps-3">
              <input id="list-radio-passport" type="radio" value={price} onClick={(e) => { setPrice(20000) }} name="priceradio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
              <label for="list-radio-passport" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rs.20000</label>
            </div>
          </li>
        </ul>

        <h3 class="mb-4 mt-4 font-semibold text-gray-900 dark:text-white">Roomates Required</h3>
        <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div class="flex items-center ps-3">
              <input id="list-radio-license" type="radio" value={profession} onClick={() => { setProfession('Student') }} name="professionradio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
              <label for="list-radio-license" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Student</label>
            </div>
          </li>
          <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div class="flex items-center ps-3">
              <input id="list-radio-id" type="radio" value={profession} onClick={() => { setProfession('Traveller') }} name="professionradio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
              <label for="list-radio-id" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Traveller</label>
            </div>
          </li>
          <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div class="flex items-center ps-3">
              <input id="list-radio-military" type="radio" value={profession} onClick={() => { setProfession('Tourist') }} name="professionradio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
              <label for="list-radio-military" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tourist</label>
            </div>
          </li>
        </ul>
      </div>
      <h3 class="mb-4 mt-4 font-semibold text-gray-900 dark:text-white">Facilities</h3>
      <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div class="flex items-center ps-3">
            <input id="list-radio-license" type="checkbox" value={bed} onClick={() => { setBed(true) }} name="facility" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
            <label for="list-radio-license" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bed</label>
          </div>
        </li>
        <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div class="flex items-center ps-3">
            <input id="list-radio-id" type="checkbox" value={ac} onClick={() => { setAc(true) }} name="facility" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
            <label for="list-radio-id" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">AC</label>
          </div>
        </li>
        <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div class="flex items-center ps-3">
            <input id="list-radio-passport" type="checkbox" value={parking} onClick={() => { setParking(true) }} name="facility" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
            <label for="list-radio-passport" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Parking</label>
          </div>
        </li>
        <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div class="flex items-center ps-3">
            <input id="list-radio-passport" type="checkbox" value={wifi} onClick={() => { setWifi(true) }} name="facility" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
            <label for="list-radio-passport" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Wifi</label>
          </div>
        </li>
        <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div class="flex items-center ps-3">
            <input id="list-radio-passport" type="checkbox" value={tv} onClick={() => { setTv(true) }} name="facility" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
            <label for="list-radio-passport" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tv</label>
          </div>
        </li>
      </ul>
      <button onClick={getFiltered} type="button" class=" mt-2 w-5/6 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 ml-2">Reset</button>
    </div>
  )
}

export default FilterBar