import React from "react";
import { useState } from "react";

const ContactUs = () => {
  const [contactUsForm, setContactUsForm] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  return (
    <>
      <div className="max-w-xl w-full shadow px-6 py-6 bg-white rounded-lg border mb-4">
        <div className="text-black text-center">
          <h2 className="text-2xl mb-4">تماس با ما</h2>
          <p className="text-black/60">پیشنهادات خود را با ما درمیان بگذارید</p>
        </div>
        <div className="p-6 text-left">
          <form className="w-[80%] mx-auto">
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                
                                border border-solid border-black
                                rounded-lg
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 placeholder:text-xs placeholder:text-gray-700 focus:shadow-none focus:border-yellow-700 focus:outline-none"
                id="name"
                value={contactUsForm.name}
                onChange={(e) =>
                  setContactUsForm({ ...contactUsForm, name: e.target.value })
                }
                placeholder="نام شما"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            
                            border border-solid border-black
                            rounded-lg
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 placeholder:text-xs placeholder:text-gray-700 focus:shadow-none focus:border-yellow-700 focus:outline-none"
                  id="email"
                  value={contactUsForm.email}
                  onChange={(e) =>
                    setContactUsForm({
                      ...contactUsForm,
                      email: e.target.value,
                    })
                  }
                  aria-describedby="email"
                  placeholder="ایمیل"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            
                            border border-solid border-black
                            rounded-lg
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 placeholder:text-xs placeholder:text-gray-700 focus:shadow-none focus:border-yellow-700 focus:outline-none"
                  id="phone"
                  aria-describedby="phone"
                  value={contactUsForm.number}
                  onChange={(e) =>
                    setContactUsForm({
                      ...contactUsForm,
                      number: e.target.value,
                    })
                  }
                  placeholder="تلفن تماس"
                />
              </div>
            </div>

            <div className="form-group mb-6">
              <textarea
                type="text"
                rows={4}
                className="form-control block
                          w-full
                          px-3
                          py-1.5
                          text-base
                          font-normal
                          text-gray-700
                          
                          border border-solid border-black
                          rounded-lg
                          transition
                          ease-in-out
                          m-0
                          focus:text-gray-700 placeholder:text-xs placeholder:text-gray-700 focus:shadow-none focus:border-yellow-700 focus:outline-none"
                id="message"
                value={contactUsForm.message}
                onChange={(e) =>
                  setContactUsForm({
                    ...contactUsForm,
                    message: e.target.value,
                  })
                }
                placeholder="متن پیام"
              ></textarea>
            </div>
          </form>
          <div className="">
            <button
              type="button"
              className="
                            w-fit
                            px-6
                            py-2.5
                            bg-blue-600
                            text-white
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded-lg
                            shadow-md
                            bg-lime-700
                            hover:bg-lime-800 hover:shadow-lg
                            focus:bg-lime-800 focus:shadow-lg focus:outline-none focus:ring-0
                            active:bg-lime-700 active:shadow-lg
                            transition
                            duration-150
                            ease-in-out"
            >
              ارسال پیام
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
