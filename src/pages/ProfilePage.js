import { useState } from "react";
import { useEffect } from "react";
import EditProfile from "components/profile/EditProfile";
import ListOrders from "components/profile/ListOrders";
import ListPayments from "components/profile/ListPayments";
import LoadableLoading from "components/shared/LoadableLoading";
import { profile } from "services/account";
import checkLoginUser from "helper/checkLoginUser";
import { useNavigate } from "react-router";

const ProfilePage = () => {
  const [usename, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getProfileData = async () => {
      setLoading(true);
      const response = await profile();
      if (response.status) setUsername(response?.data?.mobile);
      setLoading(false);
    };
    if (checkLoginUser()) {
      getProfileData();
    } else {
      navigate("/");
    }
  }, []);
  return (
    <>
      {loading && <LoadableLoading />}
      <div class="sticky top-0 border-b border-gray-200 w-full bg-white text-black">
        <div className="container xl:max-w-6xl mx-auto">
          <ul
            class="flex nav nav-tabs whitespace-nowrap -mb-px text-sm font-medium text-center overflow-x-auto overflow-y-hidden"
            id="tabs-tab"
            role="tablist"
          >
            <li class="mr-2 nav-item" role="presentation">
              <a
                href="#edit-profile"
                data-bs-toggle="pill"
                data-bs-target="#edit-profile"
                className="inline-block p-4 border-b-2 rounded-t-lg nav-link active"
              >
                ویرایش اطلاعات کاربر
              </a>
            </li>
            <li class="mr-2 nav-item" role="presentation">
              <a
                href="#list-orders"
                data-bs-toggle="pill"
                data-bs-target="#list-orders"
                className="inline-block p-4 border-b-2 rounded-t-lg nav-link"
              >
                لیست سفارشات
              </a>
            </li>
            <li class="mr-2 nav-item" role="presentation">
              <a
                href="#list-payments"
                data-bs-toggle="pill"
                data-bs-target="#list-payments"
                className="inline-block p-4 border-b-2 rounded-t-lg nav-link"
              >
                لیست پرداختی ها
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-b border-gray-200 w-full bg-white text-black">
        <div
          className="container xl:max-w-6xl mx-auto pt-10 tab-content"
          id="tabs-tabContent"
        >
          {checkLoginUser() ? (
            <>
              <EditProfile usename={usename} />
              <ListOrders />
              <ListPayments />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default ProfilePage;
