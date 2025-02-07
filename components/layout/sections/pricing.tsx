import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Starter - Simple Beginnings",
    popular: 0,
    price: 0,
    description:
      "Perfect for those just starting their investment journey. Track your returns effortlessly with the essentials.",
    buttonText: "Start Tracking",
    benefitList: [
      "Track 1 investment",
      "Real-time ROI updates",
      "Basic investment analytics",
      "Email support",
      "Secure and private",
    ],
  },
  {
    title: "Pro - The Smart Investor",
    popular: 1,
    price: 45,
    description:
      "For serious investors looking to optimize their portfolio. Advanced tracking features, all in one place.",
    buttonText: "Upgrade to Pro",
    benefitList: [
      "Track up to 5 investments",
      "Automated monthly ROI updates",
      "Detailed performance insights",
      "Priority support",
      "Customizable alerts",
    ],
  },
  {
    title: "Enterprise - Unmatched Efficiency",
    popular: 0,
    price: 120,
    description:
      "Take full control of your investments with enterprise-level features. Scale with precision and track your wealth like never before.",
    buttonText: "Contact Us",
    benefitList: [
      "Track unlimited investments",
      "Advanced performance tracking",
      "Custom ROI calculation models",
      "24/7 dedicated support",
      "Enterprise-grade security",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Get unlimitted access
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Lorem ipsum dolor sit amet consectetur adipisicing reiciendis.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">${price}</span>
                  <span className="text-muted-foreground"> /month</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant={
                    popular === PopularPlan?.YES ? "default" : "secondary"
                  }
                  className="w-full"
                >
                  {buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
