import face from '../../Images/face.jpeg'
const ApplicationForm = () => {
    return (
        <div className='shadow-lg p-8 '>
            <form class="max-w-full mx-auto">
                <div className="rounded-t-lg overflow-hidden mt-2 mb-4 flex justify-center items-center">
                    <img src={face} alt="Face" className="w-1/2 h-auto rounded" />
                </div>
                <label htmlFor="message">Type in the message for the application</label>
                <div className='mb-5'>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                </div>
                <div className='flex justify-center'>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-center">Submit Appplication</button>
                </div>
            </form>
        </div>
    )
}

export default ApplicationForm