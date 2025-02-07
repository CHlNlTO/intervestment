import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Accessible Anytime, Anywhere",
    description:
      "Track your investments on any device with our mobile-friendly platform—stay informed wherever you go.",
  },
  {
    icon: "BadgeCheck",
    title: "Reliable & Verified Data",
    description:
      "Gain confidence with accurate, up-to-date investment tracking powered by secure and transparent calculations.",
  },
  {
    icon: "Goal",
    title: "Goal-Oriented Insights",
    description:
      "Set and monitor your investment goals effortlessly with intuitive performance tracking and ROI projections.",
  },
  {
    icon: "BarChart",
    title: "Real-Time Analytics",
    description:
      "Make data-driven decisions with live investment updates and detailed financial insights.",
  },
  {
    icon: "Bell",
    title: "Instant Notifications",
    description:
      "Receive timely alerts about earnings, updates, and key financial milestones—never miss an opportunity.",
  },
  {
    icon: "ShieldCheck",
    title: "Secure & Transparent",
    description:
      "Your data is protected with industry-leading security measures, ensuring safe and reliable investment tracking.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
        fugiat, odit similique quasi sint reiciendis quidem iure veritatis optio
        facere tenetur.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
