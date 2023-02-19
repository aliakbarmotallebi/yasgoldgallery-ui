import { useState, memo } from "react";
import EditProfile from "components/profile/EditProfile";
import ListOrders from "components/profile/ListOrders";
import ListPayments from "components/profile/ListPayments";
import LoadableLoading from "components/shared/LoadableLoading";
import checkLoginUser from "helper/checkLoginUser";

const ProfilePage = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <LoadableLoading />}
      <div className="sticky top-0 border-b border-gray-200 w-full bg-white text-black">
        <div className="container xl:max-w-6xl mx-auto">
          <ul
            className="flex nav nav-tabs whitespace-nowrap -mb-px text-sm font-medium text-center overflow-x-auto overflow-y-hidden"
            id="tabs-tab"
            role="tablist"
          >
            <li className="mr-2 nav-item" role="presentation">
              <a
                href="#edit-profile"
                data-bs-toggle="pill"
                data-bs-target="#edit-profile"
                className="inline-block p-4 border-b-2 rounded-t-lg nav-link active"
              >
                ویرایش اطلاعات کاربر
              </a>
            </li>
            <li className="mr-2 nav-item" role="presentation">
              <a
                href="#list-orders"
                data-bs-toggle="pill"
                data-bs-target="#list-orders"
                className="inline-block p-4 border-b-2 rounded-t-lg nav-link"
              >
                لیست سفارشات
              </a>
            </li>
            <li className="mr-2 nav-item" role="presentation">
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

      <div className="border-b border-gray-200 w-full bg-white text-black">
        <div
          className="container xl:max-w-6xl mx-auto px-4 xl:px-0 pt-10 tab-content"
          id="tabs-tabContent"
        >
          {checkLoginUser() ? (
            <>
              <EditProfile setLoading={setLoading} />
              <ListOrders />
              <ListPayments />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default memo(ProfilePage);
