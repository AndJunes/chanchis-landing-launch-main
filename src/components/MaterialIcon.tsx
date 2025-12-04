interface MaterialIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const MaterialIcon = ({ name, className = "", size = 24 }: MaterialIconProps) => {
  return (
    <span 
      className={`material-symbols-rounded ${className}`}
      style={{ fontSize: size }}
    >
      {name}
    </span>
  );
};
