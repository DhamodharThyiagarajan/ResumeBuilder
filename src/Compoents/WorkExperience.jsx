import React from "react";
import { useNavigate } from "react-router-dom";
import { onSubmitExperienceData } from "../action/action";
import { useDispatch } from "react-redux";
import { useForm, useFieldArray } from "react-hook-form";

function WorkExperience() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { experiences: [{ jobTitle: "", organization: "", startYear: "", endYear: "" }] }
  });

  const { fields, append, remove } = useFieldArray({ control, name: 'experiences' });

  const onSubmit = (data) => {
    dispatch(onSubmitExperienceData(data.experiences));
    navigate("/details/education");
  };

  return (
    <main className="flex-1 p-4 md:p-6 lg:p-8">
      <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 md:mb-8">
        Work Experience
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 md:space-y-8 max-w-4xl">
        {fields.map((field, index) => (
          <div key={field.id} className="space-y-4 md:space-y-6 border-b pb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
              <h2 className="text-base md:text-lg font-medium text-gray-700">
                Experience {index + 1}
              </h2>
              {fields.length > 1 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm transition-colors"
                >
                  Remove
                </button>
              )}
            </div>

            {/* Job Title + Organization side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Job Title
                </label>
                <input
                  type="text"
                  placeholder="Enter Job Title"
                  {...register(`experiences.${index}.jobTitle`, { required: 'Job title required' })}
                  defaultValue={field.jobTitle || ''}
                  className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors?.experiences?.[index]?.jobTitle && <p className="text-red-600 text-sm mt-1">{errors.experiences[index].jobTitle.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Organization Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Organization Name"
                  {...register(`experiences.${index}.organization`, { required: 'Organization required' })}
                  defaultValue={field.organization || ''}
                  className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors?.experiences?.[index]?.organization && <p className="text-red-600 text-sm mt-1">{errors.experiences[index].organization.message}</p>}
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
                  placeholder="Select year"
                  {...register(`experiences.${index}.startYear`, { required: 'Start year required' })}
                  defaultValue={field.startYear || ''}
                  className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors?.experiences?.[index]?.startYear && <p className="text-red-600 text-sm mt-1">{errors.experiences[index].startYear.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Year
                </label>
                <input
                  type="text"
                  placeholder="Select year"
                  {...register(`experiences.${index}.endYear`, { required: 'End year required' })}
                  defaultValue={field.endYear || ''}
                  className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors?.experiences?.[index]?.endYear && <p className="text-red-600 text-sm mt-1">{errors.experiences[index].endYear.message}</p>}
              </div>
            </div>
          </div>
        ))}

        {/* Add new experience */}
        <button
          type="button"
          onClick={() => append({ jobTitle: "", organization: "", startYear: "", endYear: "" })}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Add New
        </button>

        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 md:pt-6">
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors order-2 sm:order-1"
            onClick={() => navigate("/details/personal-info")}
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

export default WorkExperience;
