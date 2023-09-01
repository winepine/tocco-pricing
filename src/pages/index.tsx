import PricingContainer from "@/components/Pricing/PricingContainer";
import PricingPlan from "@/components/Pricing/PricingPlan";
import { PricingPlans } from "@/constants/PricingPlans";
import { useState } from "react";

export default function Pricing() {
  const [currentPlan, setCurrentPlan] = useState<PricingPlan>(PricingPlans[0]);
  return (
    <PricingContainer>
      {PricingPlans.map(plan => (
        <PricingPlan
          key={plan.title}
          plan={plan}
          isActive={plan.title == currentPlan.title}
        /> // We can use IDs here to compare
      ))}
    </PricingContainer>
  );
}
