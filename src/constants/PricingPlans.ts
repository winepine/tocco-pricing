import { PricingPlan } from "@/types/PricingPlan";

export const PricingPlans: PricingPlan[] = [
  {
    title: "FREE",
    price: 0,
    description: "To learn more about the platform",
    priceDescription: "Forever",
    bgColor: "#fff",
    buttonColor: "#000",
    features: [
      "Be listed on marketplace",
      "Claim your profile",
      "Direct Messaging (max.5)",
    ],
  },
  {
    title: "BASIC",
    price: 59,
    description: "To showcase your catalogue",
    priceDescription: "Billed anually or $62 monthly",
    bgColor: "#fff",
    buttonColor: "#fff",
    features: [
      "Everything in Free",
      "Add your own catalogue",
      "Add your certifications & labels",
      "Unlimited messaging & calls",
      "Access to the full marketplace",
    ],
  },
  {
    title: "PRO",
    price: 112,
    buttonColor: "#fff",
    description: "End-to-end supplier platform",
    priceDescription: "Billed anually or $120 monthly",
    bgColor: "rgb(134 239 172)",
    features: [
      "Everything in Basic",
      "Customizable profile with tailored branding",
      "Direct order for products & samples",
      "Sample order management",
      "Payment processing",
      "Media coverage (featured interviews & deep-dives)",
      "Confidential transactions (embedded NDAs)",
      "Access to investor network",
      "Access to tocco's community",
    ],
  },
];
