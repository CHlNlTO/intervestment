"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "John Morales",
    userName: "Financial Analyst",
    comment:
      "This platform makes tracking investments effortless! The automated ROI calculations save me so much time. Highly recommend it.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sophia Carter",
    userName: "Entrepreneur",
    comment:
      "Finally, an investment tracker that gives me real-time updates and smart alerts. I love the transparency and accuracy of the reports!",
    rating: 4.8,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Adam Reyes",
    userName: "Chief Investment Officer",
    comment:
      "A must-have for anyone serious about their investments. The security and automated features give me peace of mind.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Ethan Vargas",
    userName: "Tech Startup Founder",
    comment:
      "The best investment tracker I've used! It's easy to navigate, and the instant notifications keep me updated without the hassle.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Ava Santos",
    userName: "Wealth Manager",
    comment:
      "I appreciate how secure and transparent the platform is. The detailed reports and insights help me make informed decisions.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Isabella Cruz",
    userName: "Software Engineer",
    comment:
      "Smooth user experience and powerful tracking features. It’s great to have everything in one place with automated updates!",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Hear What Our 1000+ Clients Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
