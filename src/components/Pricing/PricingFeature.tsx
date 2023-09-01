type Props = {
  feature: string;
};
const PricingFeature = ({ feature }: Props) => {
  return (
    <li className="flex gap-2 items-center ">
      <PricingTickSvg />
      <span className="text-sm text-gray-500 text-left">{feature}</span>
    </li>
  );
};
const PricingTickSvg = () => {
  return (
    <svg
      style={{ minWidth: "15px", minHeight: "17px" }}
      fill="#000000"
      height="17px"
      width="15px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 490 490"
    >
      <polygon points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 " />
    </svg>
  );
};
export default PricingFeature;
