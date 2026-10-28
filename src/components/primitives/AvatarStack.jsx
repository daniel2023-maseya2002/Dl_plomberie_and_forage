export default function AvatarStack({ avatars = [] }) {
  return (
    <div className="flex -space-x-3">
      {avatars.map((a, i) => (
        <img
          key={i}
          src={a.src}
          alt={a.alt}
          className="h-9 w-9 rounded-full border-2 border-white object-cover bg-mist-100"
        />
      ))}
    </div>
  );
}