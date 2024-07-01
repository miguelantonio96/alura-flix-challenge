
export default function Title({ text, className, color }) {
  return (
    <div className={className} style={{ backgroundColor: color }}>
      {text}
    </div>
  );
}
