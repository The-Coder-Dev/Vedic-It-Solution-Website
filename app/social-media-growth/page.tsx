import PageHeader from "@/components/PageHeader";
import ServiceInfoCard from "@/components/ServiceInfoCard";
import React from "react";

const MetaAds = () => {
  return (
    <section className="w-full min-h-screen">
      <PageHeader
        title="Social Media Growth"
        subtitle="Social media is no longer optional - it is a core business growth channel."
        description="At Vedic IT Solutions, we build structured growth systems for brands on Facebook and Instagram that focus on visibility, engagement, and conversions — not just followers."
      />
      <section className="w-full mx-auto max-w-345 px-8 py-20">
        <div className="mb-16">
          <h1 className="text-3xl md:text-6xl font-bold uppercase text-black ">
            Our Social Media Growth Framework
          </h1>
          <p className="mt-5">We don’t randomly post content. We implement a structured growth model:</p>
          <div className="w-full grid md:grid-cols-3 gap-6 mt-8">
            <ServiceInfoCard
              title="Brand Positioning Strategy"
              description="High-engagement posts, carousel designs, ad creatives, and reel covers tailored for performance."
            />
            <ServiceInfoCard
              title="Content Creation & Optimization"
              content={[
                {
                  type: "bullets",
                  content: [
                    "High-quality creatives",
                    "Reels & short-form video strategy",
                    "Value-based educational posts",
                    "Engagement-driven captions",
                    "Strong call-to-actions"
                  ],
                },
              ]}
            />
            <ServiceInfoCard
              title="Algorithm Understanding"
              content={[
                {
                  type: "text",
                  content: "We align content with platform algorithms of:",
                },
                {
                    type: "bullets",
                    content: ["Facebook", "Instagram"]
                },
                {
                    type: "text",
                    content: "Posting time, engagement signals, watch time, saves, shares — everything is optimized strategically.  "
                }
              ]}
            />
            <ServiceInfoCard
              title="Organic + Paid Growth Integration"
              content={[
                {
                    type: "bullets",
                    content: ["Boost strategy with precision targeting", "Retargeting warm audience","Funnel-based campaign structure", "Lead form & WhatsApp integration"]
                }
              ]}
            />
            <ServiceInfoCard
              title="Analytics & Continuous Optimization"
              content={[
                {
                    type: "bullets",
                    content: [
                        "Engagement rate tracking",
                        "Reach & impression analysis",
                        "Audience insights study",
                        "Content performance breakdown"
                    ]
                }
              ]}
            />
          </div>
        </div>

        <div className="mb-16">
          <h1 className="text-3xl md:text-6xl font-bold uppercase text-black ">
            Why Choose Us
          </h1>
          <div className="w-full grid md:grid-cols-3 gap-6 mt-8">
            <ServiceInfoCard
              title="Followers Do Not Equal Revenue"
              description="10,000 random followers are less valuable than 1,000 targeted potential buyers"
            />
            <ServiceInfoCard
              title="Consistency Beats Virality"
              description="One viral post cannot replace structured weekly execution."
            />
            <ServiceInfoCard
              title="80% of Sales Come From Retargeting"
              description="Most buyers need multiple touchpoints before conversion."
            />
            <ServiceInfoCard
              title="Watch Time Is More Important Than Likes"
              description="The algorithm prioritizes retention over reactions."
            />
            <ServiceInfoCard
              title="Content Without Funnel = Wasted Traffic"
              description="If your profile does not guide visitors toward inquiry or purchase, growth stops at engagement."
            />
            <ServiceInfoCard
              title="Data-Backed Decisions Win"
              description="We analyze what works and scale it — not rely on assumptions."
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default MetaAds;
