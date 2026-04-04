import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";

import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Abdull Manan | AI Engineer"
        description="Learn more about Abdull Manan, a dedicated AI Engineer. Discover the journey, skills, and passion that drive me to build intelligent and innovative solutions."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "Learn About Abdull Manan - AI Engineer",
          description:
            "Dive into the story of Abdull Manan, an AI Engineer. Uncover the experiences, skills, and passion that fuel a commitment to delivering exceptional AI solutions.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Abdull Manan - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "AI Engineer portfolio, AI Engineer, Artificial Intelligence, Python, Docker, Kubernetes, Nextjs, Professional Journey, Skills, Passion for AI",
          },
        ]}
      />
      <AboutHero />
    </>
  );
}
