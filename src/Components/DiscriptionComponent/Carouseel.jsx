import { Carousel } from 'flowbite-react';
import pic1 from '../../Images/pic1.jpeg'
import pic2 from '../../Images/pic2.jpeg'
import pic3 from '../../Images/pic3.jpeg'
import pic4 from '../../Images/pic4.jpeg'

const Carouseel = () => {
  return (
    <div>
        <div style={{height:"450px"}}className="h-100 sm:h-96 xl:h-96 2xl:h-96 w-11/12 ml-20 mt-4">
      <Carousel>
        <img src={pic1} alt="..." />
        <img src={pic2} alt="..." />
        <img src={pic3} alt="..." />
        <img src={pic4} alt="..." />
      </Carousel>
    </div>
    </div>
  )
}

export default Carouseel