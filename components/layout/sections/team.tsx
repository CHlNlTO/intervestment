import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}
interface SocialNetworkProps {
  name: string;
  url: string;
}
export const TeamSection = () => {
  const teamList: TeamProps[] = [
    {
      imageUrl:
        "https://lh3.googleusercontent.com/fife/ALs6j_Ej-Sh5AsHteQ5aMsvJGbpEvo0DNCWOlj3nFDeY5ssSwO6e8csxHc4tchW4skuMLDaVmYOLaTYoX4x1_t2crDEgeeHjVHK6XqwXsJbIv7isr6xctqcKberpk3CeP74h0txNWNvqdiFKWNvGZvaRRoobM3ckwmhN6yXZjHs_7sbNBimc2RyXFcbfk823YiQOuZ4w34kk0d55FPgUlxsh9Dovxq7dQJVAyZ6W8dDPRzGs7JOwwP3U6ksGEiM8v6ekXhILDdCl_OUYeamd2GRkuHc7ZBHba-3kUEu5m3w1FHmTmBKPC91xgYNcRHC1fffXI5ZO8RJAKSrxv9FMr4rwBcE23KSi2TdfjoujpVeXIjmWPeo5LpMqjE9Z22vnO_qqVQlcLGkODMmnMIFVZHhv94rCkd8CmOY1NScqjhzOdo9-eSEFT6IXyRcwm8yPf3J01FoiNMBJbaApU4tSTaS72nXBK0CYt8Q64UEuv3txvC2DcrO1cEYxgbCxfN30b3qSz0BhbvLAkYZ5ErLxwBoNMTp2yjK0v4sAfUw7ASO_xWuiR8uUBGPjmPYXngJQUPzXlJSaZ8vNw1XiDgErepO85erMxrS_AhMqdbPcJbkxBM7KMp7Qqbx-NVJP75gt34EQ_PDuVPsO4tzdXlyrsUiBOm_PiPGLBowqkpaitkBEtz28cPb5cgLMnindZlKlrwM5VT0Rjegs5zJHGU33BJ3mu_Fr1zfzAOx8rtRMjVJWwyiipr15wIsOWrGWxa4fIklrzbws3Mpw31iVZrlOLvCohW4rBPNBEtlbMBqj3-E2_CCZIvFMbRBekJot5DKb4kC_e_94wF8d-V5pWFM052xjLxXRco3XgRefIxD_qdOGX8Lm8tFg5SkG5tml0jMDlXGe8yVjSRuh6kzEsRolkPmQ__kt88PKR3ZsheKxSUxylHbTsVs5mp77lRzt9PmmFCT4gcfoMCpqnP0MuXUtkFZSPTb8ZTWjVSO5-uOMwMaeZO0u153wwR5bMNvwU04aA_Ji1kUmL-mO5vVithiJPACYmrfmEu965N1aUj04eG_e3fzkuDgxKLKcIMsu1S-BUvvLO2elf09eYRFSvrq6apxVKidbigUs5Yph4pBAaRpKxSv_TolG6zsXdr0fRBuxLVDr4AKT3atim65fZ730FM5xDz59q4dg6VGBtx0bKRJAvZRXZvJqy6QiReh6S1CYJfmDzOBCMeX0FOPg6BtriKjKGsE6YtJBBCqSFZfx8BHJ4_8S4rl4pRfGbvzpErlAaJu4X34RJ1UQvVRDwNNn3Fuutre5laiFJb7ZFuJ8T1RW58CdQUXKz4BjpIwbW7wqr0AY6oQqHrGayiZ5DwsQPF3GQUfsJ14bQV6VMrdZ-X8l8Fskw0FsfrETpCYS4ktBC5LjgzyMnpPwmUay_tqSMTz6UBKh20GZ2X_EvaMMJD0kZttPuw5IBDsXLCM9tRqvDjfkaZK8sd6jBlpkbt-rhZKhXBCEqufFutY9eVV2d7Pr_cHH8xnCx6RuTBem-kNSagyuuBWsB9uwI5Q4WiDz4wqR4zyy4ZEa2s4C1ahfRLVxrj82SexefmnJ-Ku2GcKQCIs7s6AYlumK5Gpely157EQ4sy07rQ2B2W86ZN7GH3GjoBq2yIvbyGnSPNBa=w1920-h945",
      firstName: "Clark Wayne",
      lastName: "Abutal",
      positions: ["Full Stack Developer", "Creator Of Intervestments"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/clark-wayne-abutal-1005001aa",
        },
        {
          name: "Github",
          url: "https://github.com/CHlNlTO",
        },
        {
          name: "X",
          url: "https://x.com/clrkwayne",
        },
      ],
    },
    {
      imageUrl: "https://cdn-icons-png.flaticon.com/512/12222/12222560.png",
      firstName: "OpenAI",
      lastName: "ChatGPT",
      positions: ["AI Overlord", "24/7 Code Therapist"],
      socialNetworks: [
        {
          name: "Website",
          url: "https://openai.com/chatgpt",
        },
      ],
    },
    {
      imageUrl:
        "https://www-cdn.anthropic.com/images/4zrzovbb/website/1c42a8de70b220fc1737f6e95b3c0373637228db-1319x1512.gif?w=1920&q=75",
      firstName: "Anthropic",
      lastName: "Claude",
      positions: ["Ethical AI Sage", "AI That Tries To Be Polite"],
      socialNetworks: [
        {
          name: "Website",
          url: "https://www.anthropic.com/claude",
        },
      ],
    },
    {
      imageUrl:
        "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png",
      firstName: "Next.js",
      lastName: "Framework",
      positions: ["React’s Fast & Furious Cousin", "SEO Wizard"],
      socialNetworks: [
        {
          name: "Website",
          url: "https://nextjs.org/",
        },
      ],
    },
    {
      imageUrl:
        "https://static-00.iconduck.com/assets.00/brand-vercel-icon-512x436-8wo8pcih.png",
      firstName: "Vercel",
      lastName: "Deployments",
      positions: ["Serverless Sorcerer", "The ‘It Works On My Machine’ Fixer"],
      socialNetworks: [
        {
          name: "Website",
          url: "https://vercel.com/",
        },
      ],
    },
    {
      imageUrl:
        "https://static-00.iconduck.com/assets.00/brand-supabase-icon-462x512-fs395kkc.png",
      firstName: "Supabase",
      lastName: "DB",
      positions: ["PostgreSQL's Cool Younger Sibling", "Firebase Escape Plan"],
      socialNetworks: [
        {
          name: "Website",
          url: "https://supabase.com/",
        },
      ],
    },
  ];

  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />;
      case "Github":
        return <GithubIcon />;
      case "X":
        return <XIcon />;
    }
  };

  return (
    <section id="team" className="container lg:w-[75%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Team
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          The Company Dream Team
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teamList.map(
          (
            { imageUrl, firstName, lastName, positions, socialNetworks },
            index
          ) => (
            <Card
              key={index}
              className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
            >
              <CardHeader className="p-0 gap-0">
                <div className="h-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt=""
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                  />
                </div>
                <CardTitle className="py-6 pb-4 px-6">
                  {firstName}
                  <span className="text-primary ml-2">{lastName}</span>
                </CardTitle>
              </CardHeader>
              {positions.map((position, index) => (
                <CardContent
                  key={index}
                  className={`pb-0 text-muted-foreground ${
                    index === positions.length - 1 && "pb-6"
                  }`}
                >
                  {position}
                  {index < positions.length - 1 && <span>,</span>}
                </CardContent>
              ))}

              <CardFooter className="space-x-4 mt-auto">
                {socialNetworks.map(({ name, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    className="hover:opacity-80 transition-all"
                  >
                    {socialIcon(name)}
                  </Link>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
