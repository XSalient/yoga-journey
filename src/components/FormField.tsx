import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

interface FormFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  helperText?: string;
  as?: 'input' | 'textarea' | 'select';
  rows?: number;
  options?: Array<{ value: string; label: string }>;
}

export const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  placeholder,
  required = false,
  type = 'text',
  helperText,
  as = 'input',
  rows = 4,
  options = [],
}) => {
  const { control, formState: { errors } } = useFormContext();
  const error = errors[name];

  const inputClass = `w-full px-4 py-3 rounded-sm border transition-all font-sans text-body placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-500 ${
    error ? 'border-error focus:ring-error' : 'border-border focus:border-forest-500'
  }`;

  return (
    <div className="mb-6 flex flex-col gap-2">
      <label className="text-body-sm font-semibold text-text-primary flex items-center gap-1">
        {label}
        {required && <span className="text-error">*</span>}
      </label>

      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          if (as === 'textarea') {
            return (
              <textarea
                {...field}
                placeholder={placeholder}
                rows={rows}
                className={inputClass}
              />
            );
          }

          if (as === 'select') {
            return (
              <select {...field} className={inputClass}>
                <option value="">Select an option</option>
                {options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            );
          }

          return (
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              className={inputClass}
            />
          );
        }}
      />

      {error && (
        <p className="text-body-sm text-error">{error.message as string}</p>
      )}

      {helperText && !error && (
        <p className="text-body-sm text-text-muted">{helperText}</p>
      )}
    </div>
  );
};
