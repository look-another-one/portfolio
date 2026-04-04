import Head from "next/head";

import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";

import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Abdull Manan | AI Engineer"
        description="Explore the professional portfolio of Abdull Manan, a skilled AI Engineer. Discover expertise in AI, Machine Learning, algorithms, and deep web technologies."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Abdull Manan - AI Engineer",
          description:
            "Dive into the world of AI with Abdull Manan. Discover an AI Engineer showcasing cutting-edge technologies and intelligent systems.",
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
              "AI Engineer, Artificial Intelligence, Machine Learning, Python, Software Developer, Typescript, React, Docker, Kubernetes, Tech Portfolio",
          },
        ]}
      />
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>
      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />

    </>
  );
}
