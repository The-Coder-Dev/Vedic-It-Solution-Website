import PageHeader from "@/components/PageHeader";
import ServiceInfoCard from "@/components/ServiceInfoCard";
import React from "react";

const MetaAds = () => {
  return (
    <section className="w-full min-h-screen">
      <PageHeader
        title="Graphic Design"
        description="At Vedic IT Solutions, we create strategic graphic designs that don’t just look attractive — they influence decisions, build trust, and drive action. "
      />
      <section className="w-full mx-auto max-w-345 px-8 py-20">
        <div className="mb-16">
          <h1 className="text-6xl font-bold uppercase text-black ">
            What We Design
          </h1>
          <div className="w-full grid md:grid-cols-3 gap-6 mt-8">
            <ServiceInfoCard
              title="Social Media Creatives"
              description="High-engagement posts, carousel designs, ad creatives, and reel covers tailored for performance."
            />
            <ServiceInfoCard
              title="Branding & Identity"
              content={[
                {
                  type: "bullets",
                  content: [
                    "Logo Design",
                    "Brand Color Systems",
                    "Typography Selection",
                    "Brand Guidelines",
                  ],
                },
              ]}
            />
            <ServiceInfoCard
              title="Marketing Materials Brochures"
              content={[
                {
                  type: "bullets",
                  content: ["Flyers", "Posters", "Catalogs", "Business Cards"],
                },
              ]}
            />
            <ServiceInfoCard
              title="Ad Creatives"
              description="Conversion-focused designs for paid campaigns that stop scrolling and increase click-through rate (CTR)."
            />
            <ServiceInfoCard
              title="Website & UI Graphics"
              description="Custom banners, icons, landing page visuals, and interface graphics aligned with brand positioning."
            />
          </div>
        </div>

        <div className="mb-16">
          <h1 className="text-6xl font-bold uppercase text-black ">
            Our Design Strategy
          </h1>
          <p>We follow a structured creative process.</p>
          <div className="w-full grid md:grid-cols-3 gap-6 mt-8">
            <ServiceInfoCard title="Brand Understanding" />
            <ServiceInfoCard title="Audience Behaviour Study" />
            <ServiceInfoCard title="Competitor Visual Analysis" />
            <ServiceInfoCard title="Concept Development" />
            <ServiceInfoCard title="Pyshcological Color Mapping" />
            <ServiceInfoCard title="Conversion-oriented Layout Structuring" />
          </div>
        </div>

        <div className="mb-16">
          <h1 className="text-6xl font-bold uppercase text-black ">
            Why Choose Us
          </h1>
          <div className="w-full grid md:grid-cols-3 gap-6 mt-8">
            <ServiceInfoCard
              title="Colors Influence Buying Decisions"
              description="Color psychology can increase brand recognition by up to 80%."
            />
            <ServiceInfoCard
              title="Visual Hierarchy Controls Attention"
              description="Where the eye moves first determines whether a user takes action."
            />
            <ServiceInfoCard
              title="Simple Designs Convert Better"
              description="Overcrowded creatives reduce clarity and lower engagement rates."
            />
            <ServiceInfoCard
              title="Consistency Builds Trust"
              description="Brands using consistent visual identity are perceived as more professional and reliable."
            />
            <ServiceInfoCard
              title="Typography Impacts Credibility"
              description="Font selection subconsciously affects how premium or affordable your brand feels."
            />
            <ServiceInfoCard
              title="Ad Creatives Need Testing"
              description="Even small changes in headline placement or background contrast can improve conversion rate significantly"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default MetaAds;
