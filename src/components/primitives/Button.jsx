const base =
  'inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200 ' +
  'disabled:opacity-50 disabled:pointer-events-none';

const sizes = {
  md: 'px-5 py-3 text-sm',
  lg: 'px-6 py-3.5 text-[15px]',
};

const variants = {
  primary:   'bg-navy-900 text-white hover:bg-navy-700',
  secondary: 'border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white',
  ghost:     'text-navy-900 hover:text-water-600',
};

export default function Button({
  as: Tag = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  return (
    <Tag className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  );
}