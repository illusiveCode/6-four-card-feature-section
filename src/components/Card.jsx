import "../global.css";

const Card = ({ borderColour, text, title, icon }) => {
  return (
    <div
      className={`border-t-4 border-t-${borderColour} min-w-[310px] relative flex flex-col  h-[250px] p-6  shadow-lg rounded-md`}
    >
      <h3 className="text-neutral-dark-blue text-subheading font-semibold mb-2">{title}</h3>
      <p className="text-neutral-grayish-blue text-xs font-poppins">{text}</p>
      {icon && (
        <div className="absolute right-8 bottom-8">
          <img src={icon} />
        </div>
      )}
    </div>
  );
};

export default Card;
