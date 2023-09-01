import { PricingPlan } from "@/types/PricingPlan";
import PricingFeature from "./PricingFeature";

type Props = {
  plan: PricingPlan;
  isActive?: boolean;
};
const PricingPlan = ({ plan, isActive }: Props) => {
  return (
    <div
      className="basis-full md:basis-[30%] rounded-md py-5 px-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
      style={{
        backgroundColor: plan.bgColor,
      }}
    >
      <div className="space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="font-extrabold text-3xl">{plan.title}</h1>
          <p className="text-gray-500">{plan.description}</p>
        </div>

        <div className="">
          {plan.title == "FREE" ? (
            <h2 className="text-3xl font-medium">{plan.price || "Free"}</h2>
          ) : (
            <div className="flex items-center justify-center space-x-2">
              <h2 className="text-3xl font-medium">${plan.price}</h2>
              <p className="font-light">per month</p>
            </div>
          )}
          <p className="text-sm text-[rgba(124,177,244,1)] mt-0 p-0">
            {plan.priceDescription}
          </p>
        </div>

        <button
          className="  rounded-full py-2 px-16 mx-auto"
          style={{
            backgroundColor: plan.buttonColor,
            color: plan.buttonColor === "#fff" ? "black" : "white",
            border: plan.buttonColor === "#fff" ? "1px solid black" : "white",
          }}
        >
          {isActive ? "Current Plan" : "Get Started"}
        </button>

        <div className="space-y-3 justify-left flex flex-col px-8 pt-4">
          {plan.features.map(feature => (
            <PricingFeature key={feature} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
