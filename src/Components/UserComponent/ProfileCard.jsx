import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FcBusinessman } from "react-icons/fc";
import { FaAddressCard } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import pic from '../../Images/pic5.jpeg'

const ProfileCard = (props) => {
  console.log(props?.data)
  return (
    <div className="flex mt-4 mx-4">
      <div className= "w-1/3">
      {
        props.data?.image? 
        < img style={{height:"350px",width:"280px"}} class="my-auto h-auto " src={`http://localhost:5000/${props.data?.image}`} alt={pic} horizontal />
        :<></>
      }
        </div>
      <div class="w-2/3 bg-white overflow-hidden shadow rounded-lg border">
        <div class="border-t ml-12 border-gray-200 px-4 py-5 sm:p-0">
          <dl class="sm:divide-y sm:divide-gray-200">
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <div className="flex">
                <span class="text-lg mt-2 font-medium text-gray-500">
                  <FaUser />
                </span>
                <span className="text-lg ml-2 "> Name</span>
              </div>
              <dd class="mt-1 text-lg capitalize text-gray-900 sm:mt-0 sm:col-span-2">
                {props.data?.name}
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <div className="flex">
                <span class="text-lg mt-2 font-medium text-gray-500">
                  <MdEmail />
                </span>
                <span className="text-lg ml-2"> Email</span>
              </div>
              <dd class="mt-1 text-lg font-italic text-gray-900 sm:mt-0 sm:col-span-2">
                {props.data?.email}
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <div className="flex">
                <span class="text-xl mt-2 font-medium text-gray-500">
                  <FaPhoneAlt />
                </span>
                <span className="text-lg ml-2"> Phone</span>
              </div>
              <dd class="mt-1 text-lg capitalize text-gray-900 sm:mt-0 sm:col-span-2">
                {props.data?.phoneNumber
                  ? props.data?.phoneNumber
                  : "-----------"}
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <div className="flex">
                <span class="text-xl mt-2 font-medium text-gray-500">
                  <FcBusinessman />
                </span>
                <span className="text-lg ml-2"> Profession</span>
              </div>
              <dd class="mt-1 text-lg capitalize text-gray-900 sm:mt-0 sm:col-span-2">
                {props.data?.profession}
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <div className="flex">
                <span class="text-xl mt-2 font-medium text-gray-500">
                  <FaAddressCard />
                </span>
                <span className="text-lg ml-2">Cnic</span>
              </div>
              <dd class="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                {props.data?.cnic ? props.data?.cnic : "-----------"}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
