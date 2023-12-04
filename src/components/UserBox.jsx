
const UserBox = () => {
  return (
    <div className="flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-700">
        
        <div className="flex flex-col"><img src="https://pbs.twimg.com/profile_images/1687862246389796866/6gL1-lrJ_400x400.jpg" alt="Profile" className="w-11 h-11 rounded-full"/>
            <span className="font-bold text-md text-black">Egamov Jo`rabek</span>
            <span className="text-sm text-gray-dark">@Egamov19</span>
        </div>
        <div className="flex space-x-1">
            <div className="w-1 h-1 bg-gray-900 rounded-full"/>
            <div className="w-1 h-1 bg-gray-900 rounded-full"/>
            <div className="w-1 h-1 bg-gray-900 rounded-full"/>
        </div>
    </div>
  )
}

export default UserBox