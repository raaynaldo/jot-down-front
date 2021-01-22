const Profile = () => {
  return (
    <div className="flex items-center justify-center text-gray-900 bg-gray-300 main__container dark:text-white dark:bg-gray-700 svg">
      <div className="flex flex-col w-2/6 space-y-4 bg-white shadow-lg px-7 py-7 rounded-3xl h-3/4 dark:bg-gray-800">
        <div className="flex flex-row items-center pb-5 space-x-4">
          <div className="w-24 h-24 overflow-hidden border-2 border-gray-900 rounded-full">
            <img
              src="https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/e35/118971690_2679146655685881_9134098385799553533_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=LB4i5fnKvl4AX-xMYi5&tp=1&oh=ec446ac054f29a5a02e50855aec69c86&oe=6035E0A6"
              className="object-cover w-full h-full"
              alt="avatar"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-2xl font-bold">Raynaldo Sutisna</div>
            <div>raaynaldo@gmail.com</div>
          </div>
        </div>

        <div className="flex flex-row justify-between py-4 border-t-2 border-b-2">
          <div className="flex items-center">Account Picture</div>
          <div>
            <button
              class="py-2 px-4 bg-gray-700 text-white rounded hover:bg-gray-600 focus:outline-none"
              type="button"
            >
              Change...
            </button>
          </div>
        </div>
        
        <div className="flex flex-row justify-between py-4 border-t-2 border-b-2">
          <div className="flex items-center">Account Picture</div>
          <div>
            <button
              class="py-2 px-4 bg-gray-700 text-white rounded hover:bg-gray-600 focus:outline-none"
              type="button"
            >
              Change...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
