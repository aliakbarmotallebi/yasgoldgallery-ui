import { useState, memo, useEffect } from "react";
import { editProfile, profile, refreshToken } from "services/account";
import Spinner from "components/shared/Spinner";
import { useContext } from "react";
import { AlertStore } from "components/shared/alert/AlertProvider";
import { UserStore } from "context/UserContext";
import { setLS } from "helper/handlerLS";
import decodeToken from "helper/decodeToken";
import { useNavigate } from "react-router-dom";
import checkLoginUser from "helper/checkLoginUser";

const EditProfile = ({ setLoading }) => {
  const [loadingEdit, setLoadingEdit] = useState(false);
  const { setShowAlert } = useContext(AlertStore);
  const { setUser } = useContext(UserStore);
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    mobiel: "",
    firstname: "",
    lastname: "",
  });

  useEffect(() => {
    const getProfileData = async () => {
      setLoading(true);
      const response = await profile();
      if (response?.status) setUserInfo(response?.data);
      setLoading(false);
    };
    if (checkLoginUser()) {
      getProfileData();
    } else {
      navigate("/");
    }
  }, []);

  const handleRefreshToken = async () => {
    const res = await refreshToken();
    if (res?.status) {
      setLS("user", res.data);
      setUser(decodeToken("username"));
    }
  };
  const handlEditProfile = async () => {
    setLoadingEdit(true);
    const response = await editProfile(userInfo.firstname, userInfo.lastname);
    if (response?.status) {
      handleRefreshToken();
      setShowAlert({
        show: true,
        text: "ویرایش با موفقیت انجام شد",
        status: "success",
      });
    } else {
      setShowAlert({
        show: true,
        text: "ویرایش انجام نشد",
        status: "error",
      });
    }

    setLoadingEdit(false);
  };
  return (
    <div
      className="flex flex-col justify-between tab-pane show active fade"
      id="edit-profile"
    >
      <div className="w-full lg:max-w-full shadow px-6 py-6 bg-white rounded-lg border mb-4">
        <form>
          <div className="flex flex-col sm:flex-row items-center justify-between mb-4 pb-4 border-b">
            <div className="sm:text-left mb-4 sm:mb-0">
              <h2 className="font-semibold text-gray-900">
                ویرایش اطلاعات پروفایل
              </h2>
            </div>
            <div className="sm:text-right w-full sm:w-fit">
              <button
                type="button"
                onClick={handlEditProfile}
                disabled={
                  userInfo.firstname.trim() !== "" &&
                  userInfo.lastname.trim() !== ""
                    ? false
                    : true
                }
                className="bg-yellow-500 w-full sm:w-fit flex items-center justify-center hover:bg-yellow-600 text-black disabled:bg-gray-300 text-xs py-1.5 px-4 rounded focus:shadow-outline shadow"
              >
                {loadingEdit && <Spinner classBox="w-6 ml-2" />}
                <span>ویرایش تغییرات</span>
              </button>
            </div>
          </div>
          <div className=" flex justify-center">
            <div className="w-full md:w-1/2">
              <div className="mb-6">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  نام کاربری
                </label>
                <input
                  type="username"
                  id="username"
                  defaultValue={userInfo.mobile}
                  disabled
                  readonly
                  className="bg-gray-200  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="fullname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  نام
                  <span className="inline-flex bg-red-500 w-1 h-1 rounded-full mr-1"></span>
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  value={userInfo.firstname}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, firstname: e.target.value })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="fullname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  نام خانوادگی
                  <span className="inline-flex bg-red-500 w-1 h-1 rounded-full mr-1"></span>
                </label>
                <input
                  type="family"
                  name="family"
                  id="family"
                  value={userInfo.lastname}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, lastname: e.target.value })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default memo(EditProfile);
