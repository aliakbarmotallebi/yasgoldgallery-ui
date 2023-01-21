

const ProductComments = () => {
    return (
        <>
            <form className="pt-5">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" class="inline ml-1 fill-current" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M14 3v2H4v13.385L5.763 17H20v-7h2v8a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1h11zm5 0V0h2v3h3v2h-3v3h-2V5h-3V3h3z"/></svg>
                        افزدون نظر جدید
                    </h2>
                    <div class="w-full md:w-full px-3 mb-2 mt-2">
                        <textarea class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body" required></textarea>
                    </div>
                    <div class="w-full md:w-full flex items-start md:w-full px-3">
                        <div class="-mr-1">
                            <button type='submit' class="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400  text-xs rounded-lg tracking-wide mr-1 hover:bg-gray-100" >
                                ذخیره نظر
                            </button>
                        </div>
                    </div>
                </div>
            </form>

            <section className="pb-3 space-y-2">

                <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" class="inline ml-1 fill-current" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 8.994A5.99 5.99 0 0 1 8 3h8c3.313 0 6 2.695 6 5.994V21H8c-3.313 0-6-2.695-6-5.994V8.994zM20 19V8.994A4.004 4.004 0 0 0 16 5H8a3.99 3.99 0 0 0-4 3.994v6.012A4.004 4.004 0 0 0 8 19h12zm-6-8h2v2h-2v-2zm-6 0h2v2H8v-2z"/></svg>
                        لیست نظرات
                </h2>
                <div
                    class="rounded-lg flex-col w-full py-4 mx-auto bg-white border-b-2 border-r-2 border-gray-100">
                    <div class="flex-col mt-1">
                        <div class="flex items-center flex-1 px-4 font-bold leading-tight text-blue-500">
                            رضا حسنی
                            <span class="mr-2 text-xs font-normal text-gray-500">
                                دو دقیقه پیش
                            </span>
                        </div>
                        <div class="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                            اوهوو یس عالی دوستداشتم
                        </div>
                    </div>
                </div>

                <div
                    class="rounded-lg flex-col w-full py-4 mx-auto bg-white border-b-2 border-r-2 border-gray-100">
                    <div class="flex-col mt-1">
                        <div class="flex items-center flex-1 px-4 font-bold leading-tight text-blue-500">
                            رضا حسنی
                            <span class="mr-2 text-xs font-normal text-gray-500">
                                اون روز
                            </span>
                        </div>
                        <div class="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                           اوممم همینه لذت بردیم!!!
                        </div>
                    </div>
                </div>

            </section>


        </>
    );
}

export default ProductComments;