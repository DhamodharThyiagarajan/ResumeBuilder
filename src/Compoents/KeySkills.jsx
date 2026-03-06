import React from "react";
import { useNavigate } from "react-router-dom";
import { onSubmitSkillsData } from "../action/action";
import { useDispatch } from "react-redux";
import { useForm, useFieldArray } from "react-hook-form";


function KeySkills() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { skills: [""] }
  });

  const { fields, append, remove } = useFieldArray({ control, name: "skills" });

  const onSubmit = (data) => {
    dispatch(onSubmitSkillsData(data.skills));
    navigate("/preview");
  };

  return (
    <main className="flex-1 p-4 md:p-6 lg:p-8">
      <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 md:mb-8">
        Key Skills
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6 max-w-4xl">
        {/* Grid layout for skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {fields.map((field, index) => (
            <div key={field.id} className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder={`Skill ${index + 1}`}
                  {...register(`skills.${index}`, { required: 'Skill is required', maxLength: { value: 50, message: 'Max 50 characters' } })}
                  defaultValue={field.value || ''}
                  className="border rounded p-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {fields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="px-3 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors whitespace-nowrap text-sm"
                  >
                    Remove
                  </button>
                )}
              </div>
              {errors?.skills?.[index] && (
                <p className="text-red-600 text-sm">{errors.skills[index].message}</p>
              )}
            </div>
          ))}
        </div>

        {/* Add new skill */}
        <button
          type="button"
          onClick={() => append("")}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
        >
          Add Skill
        </button>

        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors order-2 sm:order-1"
            onClick={() => navigate("/details/education")}
          >
            Back
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors order-1 sm:order-2"
          >
            Preview
          </button>
        </div>
      </form>
    </main>
  );
}

export default KeySkills;
