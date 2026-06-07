import PageHeader from "@/components/PageHeader";
import ServiceInfoCard from "@/components/ServiceInfoCard";
import React from "react";

const MetaAds = () => {
  return (
    <section className="w-full min-h-screen">
      <PageHeader
        title="Website Development"
        subtitle="Your website is not just a digital brochure — it is your 24/7 sales engine."
        description="At Vedic IT Solutions, we design and develop high-performance websites that are fast, secure, conversion-focused, and built to scale. Based in Mathura and serving clients across India"
      />
      <section className="w-full mx-auto max-w-345 px-8 py-20">
        <div className="mb-16">
          <h1 className="text-6xl font-bold uppercase text-black ">
           What We Build
          </h1>
          <div className="w-full grid md:grid-cols-3 gap-6 mt-8">
            <ServiceInfoCard
              title="Business Website"
              description="Professional, responsive websites that establish credibility and authority."
            />
            <ServiceInfoCard
              title="E-Commerce Websites"
              description="Conversion-optimized online stores with secure payment gateways and smooth user experience."
            />
            <ServiceInfoCard
              title="Landing Pages"
              description="High-converting pages designed specifically for paid ads and lead generation."
            />
            <ServiceInfoCard
              title="Custom Web Applications"
              description="Tailored platforms built according to your operational requirements."
            />
            <ServiceInfoCard
              title="Portfolio & Personal Branding Websites"
              description="Clean, impactful designs that showcase expertise and build trust."
            />
            <ServiceInfoCard
              title="Corporate & Enterprise Websites"
              description="Scalable websites with advanced features and seamless CRM/ERP integration.."
            />
          </div>
        </div>

        <div className="mb-16">
          <h1 className="text-6xl font-bold uppercase text-black ">
            Our Developement Process
          </h1>
          <div className="w-full grid md:grid-cols-3 gap-6 mt-8">
            <ServiceInfoCard
              title="UI/UX Planning & Wireframing"/>
            <ServiceInfoCard
              title="Consistency Beats Virality"/>
            <ServiceInfoCard
              title="Mobile-First Design Approach"/>
            <ServiceInfoCard
              title="SEO-Optimized Development"/>
            <ServiceInfoCard
              title="Speed & Performance Optimization"/>
            <ServiceInfoCard
              title="Security Integration"/>
            <ServiceInfoCard
              title="Testing Across Devices & Browsers"/>
          </div>
        </div>

        <div className="mb-16">
          <h1 className="text-6xl font-bold uppercase text-black ">
            Why Choose Us
          </h1>
          <div className="w-full grid md:grid-cols-3 gap-6 mt-8">
            <ServiceInfoCard
              title="First Impression Is Decided in 3–5 Seconds"
              description="If your website doesn’t communicate value instantly, visitors leave."
            />
            <ServiceInfoCard
              title="Speed Directly Impacts Sales"
              description="A delay of even 1 second can reduce conversions significantly."
            />
            <ServiceInfoCard
              title="Mobile Optimization Is Not Optional"
              description="More than 70% of traffic comes from mobile devices in India."
            />
            <ServiceInfoCard
              title="Design Without Strategy Fails"
              description="A beautiful website without a user journey and call-to-action structure won’t convert"
            />
            <ServiceInfoCard
              title="Security Builds Trust"
              description="SSL, secure forms, and backend protection increase credibility and ranking."
            />
            <ServiceInfoCard
              title="SEO Must Be Integrated During Development"
              description="SEO cannot fix poor site architecture later. It must be built from day one."
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default MetaAds;
