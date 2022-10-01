import React from "react";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-blue-200 min-h-screen flex items-center">
        <div className="w-full">
          <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-5">
            Create an Event 🎉
          </h2>
          <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
            <form action="">
              <div className="mb-5">
                <label
                  htmlFor="eventname"
                  className="block mb-2 font-bold text-gray-600"
                >
                  Event Name
                </label>
                <input
                  type="text"
                  id="eventname"
                  name="eventname"
                  placeholder="Put in the event name."
                  className="border border-gray-300 shadow p-3 w-full rounded mb-"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="hostname"
                  className="block mb-2 font-bold text-gray-600"
                >
                  Host name
                </label>
                <input
                  type="text"
                  id="hostname"
                  name="hostname"
                  placeholder="Put in the host name."
                  className="border border-red-300 shadow p-3 w-full rounded mb-"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="starttime"
                  className="block mb-2 font-bold text-gray-600"
                >
                  Start Date and Time
                </label>
                <input
                  type="datetime-local"
                  id="starttime"
                  name="starttime"
                  className="border border-red-300 shadow p-3 w-full rounded mb-"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="endtime"
                  className="block mb-2 font-bold text-gray-600"
                >
                  End Date and Time
                </label>
                <input
                  type="datetime-local"
                  id="endtime"
                  name="endtime"
                  className="border border-red-300 shadow p-3 w-full rounded mb-"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="location"
                  className="block mb-2 font-bold text-gray-600"
                >
                  Host name
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Put in the location of the event."
                  className="border border-red-300 shadow p-3 w-full rounded mb-"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="eventphoto"
                  className="block mb-2 font-bold text-gray-600"
                >
                  Event Photo
                </label>
                <input
                  type="file"
                  id="eventphoto"
                  name="eventphoto"
                  placeholder="Please put the event photo."
                  className="border border-red-300 shadow p-3 w-full rounded mb-"
                />
              </div>
              <button
                className="block w-full bg-blue-500 text-purple3 font-bold p-4 rounded-lg bg-gradient-to-r  from-envitedpurple to-envitedpink my-6 px-10 py-2"
                onClick={() => navigate("/event")}
              >
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
