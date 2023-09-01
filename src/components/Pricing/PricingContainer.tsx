import { ReactNode } from "react";

const PricingContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-5">
      <h1 className="py-8 text-center text-lg md:text-xl lg:text-3xl xl:text-3xl font-extrabold uppercase">
        Choose Your Plan
      </h1>
      <div className="mt-4 flex flex-wrap md:flex-nowrap gap-12">
        {children}
      </div>
    </div>
  );
};
export default PricingContainer;
