import { useState } from "react";
import alert from "components/shared/alert/Alert";
import { editProfile } from "services/account";
import Spinner from "components/shared/Spinner";

const EditProfile = ({ usename }) => {
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    family: "",
  });

  const handlEditProfile = async () => {
    setLoading(true);
    const response = await editProfile(userInfo.name, userInfo.family);
    if (response?.status) {
      alert({ text: "ویرایش با موفقیت انجام شد", status: "success" });
      setUserInfo({
        name: "",
        family: "",
      });
    } else alert({ text: "ویرایش انجام نشد", status: "error" });
    setLoading(false);
  };
  return (
    <div
      class="flex flex-col justify-between tab-pane show active fade"
      id="edit-profile"
    >
      <div class="w-full lg:max-w-full shadow px-6 py-6 bg-white rounded-lg border mb-4">
        <form>
          <div class="flex items-center justify-between mb-4 pb-4 border-b">
            <div class="text-left">
              <h2 class="font-semibold text-gray-900">
                ویرایش اطلاعات پروفایل
              </h2>
            </div>
            <div class="text-right">
              <button
                type="button"
                onClick={handlEditProfile}
                disabled={
                  userInfo.name.trim() !== "" && userInfo.family.trim() !== ""
                    ? false
                    : true
                }
                class="bg-blue-600 flex items-center hover:bg-blue-700 text-white disabled:bg-gray-300 text-xs py-1.5 px-4 rounded focus:shadow-outline shadow"
              >
                {loading && <Spinner classNameBox="w-6 ml-2" />}
                <span>ویرایش تغییرات</span>
              </button>
            </div>
          </div>
          <div class=" flex justify-center">
            <div class="w-1/2">
              <div class="mb-6">
                <label
                  htmlFor="username"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  نام کاربری
                  <span class="inline-flex bg-red-500 w-1 h-1 rounded-full mr-1"></span>
                </label>
                <input
                  type="username"
                  id="username"
                  defaultValue={usename}
                  disabled
                  readonly
                  class="bg-gray-200  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div class="mb-6">
                <label
                  htmlFor="fullname"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  نام
                  <span class="inline-flex bg-red-500 w-1 h-1 rounded-full mr-1"></span>
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  value={userInfo.name}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, name: e.target.value })
                  }
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div class="mb-6">
                <label
                  htmlFor="fullname"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  نام خانوادگی
                  <span class="inline-flex bg-red-500 w-1 h-1 rounded-full mr-1"></span>
                </label>
                <input
                  type="family"
                  name="family"
                  id="family"
                  value={userInfo.family}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, family: e.target.value })
                  }
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
