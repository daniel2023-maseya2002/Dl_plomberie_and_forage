const baseField =
  'w-full border border-mist-200 bg-white px-3.5 py-3 text-[15px] text-navy-900 ' +
  'placeholder:text-navy-700/40 transition-colors ' +
  'focus:border-water-500 focus:outline-none';

export function Field({ label, htmlFor, required, children, hint }) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-2 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-label text-navy-700">
        <span>
          {label}
          {required && <span className="ml-1 text-water-600">*</span>}
        </span>
        {hint && <span className="text-[9px] normal-case tracking-normal text-navy-700/60">{hint}</span>}
      </span>
      {children}
    </label>
  );
}

export function TextInput(props) {
  return <input {...props} className={`${baseField} ${props.className || ''}`} />;
}

export function SelectInput({ children, ...props }) {
  return (
    <select {...props} className={`${baseField} appearance-none ${props.className || ''}`}>
      {children}
    </select>
  );
}

export function TextArea(props) {
  return (
    <textarea {...props} className={`${baseField} min-h-[110px] resize-y ${props.className || ''}`} />
  );
}