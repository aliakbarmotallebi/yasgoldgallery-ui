import EditProfile from "../components/EditProfile";
import ListOrders from "../components/ListOrders";
import ListOrdersPage from "../components/ListOrders";
import ListPayments from "../components/ListPayments";
import OrderDetails from "../components/OrderDetails";

const ProfilePage = () => {
  return (
    <>
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
          <EditProfile />
          <ListOrders />
          <ListPayments />
        </div>
      </div>
    </>
  );
};
export default ProfilePage;
