import { useState } from "react";
import { editProfile } from "services/account";
import Spinner from "components/shared/Spinner";
import { useContext } from "react";
import { AlertStore } from "components/shared/alert/AlertProvider";

const EditProfile = ({ usename }) => {
  const [loading, setLoading] = useState(false);
  const { setShowAlert } = useContext(AlertStore);
  const [userInfo, setUserInfo] = useState({
    fisrtname: "",
    lastname: "",
  });

  const handlEditProfile = async () => {
    setLoading(true);
    const response = await editProfile(userInfo.name, userInfo.family);
    if (response?.status) {
      setShowAlert({
        show: true,
        text: "ویرایش با موفقیت انجام شد",
        status: "success",
      });
      setUserInfo({
        name: "",
        family: "",
      });
    } else
      setShowAlert({
        show: true,
        text: "ویرایش انجام نشد",
        status: "error",
      });
    setLoading(false);
  };
  return (
    <div
      class="flex flex-col justify-between tab-pane show active fade"
      id="edit-profile"
    >
      <div class="w-full lg:max-w-full shadow px-6 py-6 bg-white rounded-lg border mb-4">
        <form>
          <div class="flex flex-col sm:flex-row items-center justify-between mb-4 pb-4 border-b">
            <div class="sm:text-left mb-4 sm:mb-0">
              <h2 class="font-semibold text-gray-900">
                ویرایش اطلاعات پروفایل
              </h2>
            </div>
            <div class="sm:text-right w-full sm:w-fit">
              <button
                type="button"
                onClick={handlEditProfile}
                disabled={
                  userInfo.firstname.trim() !== "" &&
                  userInfo.lastname.trim() !== ""
                    ? false
                    : true
                }
                class="bg-blue-600 w-full sm:w-fit flex items-center justify-center hover:bg-blue-700 text-white disabled:bg-gray-300 text-xs py-1.5 px-4 rounded focus:shadow-outline shadow"
              >
                {loading && <Spinner classBox="w-6 ml-2" />}
                <span>ویرایش تغییرات</span>
              </button>
            </div>
          </div>
          <div class=" flex justify-center">
            <div class="w-full md:w-1/2">
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
                  value={userInfo.firstname}
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
                  value={userInfo.lastname}
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
