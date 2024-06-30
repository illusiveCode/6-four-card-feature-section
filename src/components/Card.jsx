import "../global.css";

const getBorderClass = (color) => {
  switch (color) {
    case "primary-red":
      return "border-t-primary-red";
    case "primary-cyan":
      return "border-t-primary-cyan";
    case "primary-blue":
      return "border-t-primary-blue";
    case "primary-orange":
      return "border-t-primary-orange";
    default:
      return "";
  }
};

const Card = ({ borderColour, text, title, icon }) => {
  const borderClass = getBorderClass(borderColour);

  return (
    <div
      className={`border-t-4 min-w-[310px] relative flex flex-col h-[250px] p-6 shadow-lg rounded-md ${borderClass}`}
    >
      <h3 className="text-neutral-dark-blue text-subheading font-semibold mb-2">{title}</h3>
      <p className="text-neutral-grayish-blue text-xs font-poppins">{text}</p>
      {icon && (
        <div className="absolute right-8 bottom-8">
          <img src={icon} alt={title} />
        </div>
      )}
    </div>
  );
};

export default Card;
