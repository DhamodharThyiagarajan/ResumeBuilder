import React from "react";
import { useNavigate } from "react-router-dom";
import { onSubmitEducationData } from "../action/action";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function Education() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { institution: "", degree: "", field: "", startYear: "", endYear: "" }
  });

  const onSubmit = (data) => {
    dispatch(onSubmitEducationData(data));
    navigate("/details/key-skills");
  };

  return (
    <main className="flex-1 p-4 md:p-6 lg:p-8">
      {/* Left-aligned heading */}
      <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 md:mb-8">
        Education
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6 max-w-4xl">
        {/* Institution full width */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Institution
          </label>
          <input
            type="text"
            name="institution"
            placeholder="School/University name"
            {...register('institution', { required: 'Institution required' })}
            className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.institution && <p className="text-red-600 text-sm mt-1">{errors.institution.message}</p>}
        </div>

        {/* Degree + Field side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Degree
            </label>
            <input
              type="text"
              placeholder="e.g. Bachelor's, Master's"
              {...register('degree', { required: 'Degree required' })}
              className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.degree && <p className="text-red-600 text-sm mt-1">{errors.degree.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Field of Study
            </label>
            <input
              type="text"
              placeholder="e.g. Computer Science"
              {...register('field', { required: 'Field of study required' })}
              className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.field && <p className="text-red-600 text-sm mt-1">{errors.field.message}</p>}
          </div>
        </div>

        {/* Start Year + End Year side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Year
            </label>
            <input
              type="text"
              placeholder="e.g. 2018"
              {...register('startYear', { required: 'Start year required' })}
              className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.startYear && <p className="text-red-600 text-sm mt-1">{errors.startYear.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Year
            </label>
            <input
              type="text"
              placeholder="e.g. 2022"
              {...register('endYear', { required: 'End year required' })}
              className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.endYear && <p className="text-red-600 text-sm mt-1">{errors.endYear.message}</p>}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors order-2 sm:order-1"
            onClick={() => navigate("/details/work-experience")}
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

export default Education;
