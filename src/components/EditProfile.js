

const EditProfile = () => {
    return (
        <div class="flex flex-col justify-between">
        <div class="max-w-sm w-full lg:max-w-full shadow px-6 py-6 bg-white rounded-lg">
          <form action="" method="post">
            <div class="flex items-center justify-between mb-4 pb-4 border-b">
                <div class="text-left">
                    <h2 class="font-semibold text-gray-900">
                        ویرایش اطلاعات پروفایل
                    </h2>
                </div>
                <div class="text-right">
                    <button class="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1.5 px-8 rounded focus:shadow-outline shadow">
                        ویرایش تغییرات 
                    </button>
                </div>
            </div>
              <div class=" flex justify-center">
                <div class="w-1/2">
                  <div class="mb-6">
                      <label for="fullname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                          نام و نام خانوادگی
                      <span class="inline-flex bg-red-500 w-1 h-1 rounded-full mr-1"></span>
                      </label>
                      <input type="fullname" name="fullname" id="fullname" value="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                  </div>
                  <div class="mb-6">
                      <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        نام کاربری
                        <span class="inline-flex bg-red-500 w-1 h-1 rounded-full mr-1"></span>
                      </label>
                      <input type="username" id="username" value="09306145210"  disabled readonly class="bg-gray-200  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                  </div>
                  <div class="mb-6">
                    <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      آدرس محل سکونت
                      <span class="inline-flex bg-red-500 w-1 h-1 rounded-full mr-1"></span>
                    </label>
                    <textarea id="address" name="address" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
                  </div>
                    <div class="mb-6">
                      <label for="code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        کدپستی
                        <span class="inline-flex bg-red-500 w-1 h-1 rounded-full mr-1"></span>
                      </label>
                      <input type="text" name="text" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />

                    </div>
                </div>
              </div>
            </form>
        </div>
      </div>
    );
}

export default EditProfile;