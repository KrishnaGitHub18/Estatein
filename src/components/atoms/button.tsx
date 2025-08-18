function Button({ prop, onClick }: { prop: { name: string, color?: string }, onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`
        px-3 py-2 rounded-md text-xs text-white cursor-pointer
        whitespace-nowrap bg-[${prop.color || "#1A1A1A"}]
      `}
    >
      {prop.name}
    </div>
  );
}
export default Button;
