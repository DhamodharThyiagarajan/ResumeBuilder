import React from "react";
import { useNavigate } from "react-router-dom";
import { onSubmitFormData } from "../action/action";
import { useDispatch } from "react-redux";
import pfp from "/pfpimage.webp";
import { useForm } from "react-hook-form";
function PersonalInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      address: "",
      city: "",
      state: "",
      postalCode: "",
      objective: "",
    }
  });

  const onSubmit = (data) => {
    dispatch(onSubmitFormData(data));
    navigate("/details/work-experience");
  };

  return (
    <main className="flex-1 p-4 md:p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-8 lg:gap-24 mb-4 md:mb-6">
        <img
          src={pfp}
          alt="Profile"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full border flex-shrink-0"
        />
        <div className="text-center sm:text-left">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            Personal Information
          </h1>
          <h2 className="text-base md:text-lg font-medium text-blue-600">
            Change profile picture
          </h2>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6 max-w-4xl">
        {/* First + Last Name side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              placeholder="First Name"
              {...register('firstName', { required: 'First name is required' })}
              className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.firstName && <p className="text-red-600 text-sm mt-1">{errors.firstName.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Last Name"
              {...register('lastName', { required: 'Last name is required' })}
              className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.lastName && <p className="text-red-600 text-sm mt-1">{errors.lastName.message}</p>}
          </div>
        </div>

        {/* Email + Mobile side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } })}
              className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile
            </label>
            <input
              type="tel"
              placeholder="Mobile"
              {...register('mobile', { required: 'Mobile is required', pattern: { value: /^\+?[0-9\- ]{7,15}$/, message: 'Invalid mobile' } })}
              className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.mobile && <p className="text-red-600 text-sm mt-1">{errors.mobile.message}</p>}
          </div>
        </div>

        {/* Address full width */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <input
            type="text"
            placeholder="Address"
            {...register('address')}
            className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* City + State side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              placeholder="City"
              {...register('city')}
              className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State
            </label>
            <input
              type="text"
              placeholder="State"
              {...register('state')}
              className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Postal Code */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Postal Code
          </label>
          <input
            type="text"
            placeholder="Postal Code"
            {...register('postalCode')}
            className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Objective */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Objective
          </label>
          <textarea
            name="objective"
            placeholder="Objective"
            rows="4"
            {...register('objective')}
            className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 md:pt-6">
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors order-2 sm:order-1"
            onClick={() => navigate("/")}
          >
            Back
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors order-1 sm:order-2"
          >
            Next
          </button>
        </div>
      </form>
    </main>
  );
}

export default PersonalInfo;
