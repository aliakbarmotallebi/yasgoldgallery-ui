import EditProfile from "../components/EditProfile";
import ListOrders from "../components/ListOrders";
import ListOrdersPage from "../components/ListOrders";
import ListPayments from "../components/ListPayments";
import OrderDetails from "../components/OrderDetails";

const ProfilePage = () => {
  return (
    <>
      <div class="border-b border-gray-200 w-full bg-white text-black">
        <div className="container xl:max-w-6xl mx-auto">
          <ul
            class="flex whitespace-nowrap -mb-px text-sm font-medium text-center overflow-x-auto overflow-y-hidden"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li class="mr-2" role="presentation">
              <button
                href=""
                className="inline-block p-4 border-b-2 rounded-t-lg"
              >
                ویرایش اطلاعات کاربر
              </button>
            </li>
            <li class="mr-2" role="presentation">
              <button
                href=""
                className="inline-block p-4 border-b-2 rounded-t-lg"
              >
                لیست پرداختی ها
              </button>
            </li>
            <li class="mr-2" role="presentation">
              <button
                href=""
                className="inline-block p-4 border-b-2 rounded-t-lg"
              >
                لیست سفارشات
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-b border-gray-200 w-full bg-white text-black">
        <div className="container xl:max-w-6xl mx-auto pt-10">
          <EditProfile />
          <ListOrders />
          <ListPayments />
          <OrderDetails />
        </div>
      </div>
    </>
  );
};
export default ProfilePage;
