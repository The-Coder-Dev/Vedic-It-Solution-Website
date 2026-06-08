import PageHeader from "@/components/PageHeader";
import ServiceInfoCard from "@/components/ServiceInfoCard";
import React from "react";

const MetaAds = () => {
  return (
    <section className="w-full min-h-screen">
      <PageHeader
        title="Video Production & Editing"
        subtitle="Creative Visuals That Drive Results – Vedic IT Solutions"
        description="Video is the most powerful digital communication tool today. At Vedic IT Solutions, we produce and edit high-impact videos that capture attention, build brand authority, and generate conversions."
      />
      <section className="w-full mx-auto max-w-345 px-8 py-20">
        <div className="mb-16">
          <h1 className="text-3xl md:text-6xl  font-bold uppercase text-black ">
           What We Offer
          </h1>
          <div className="w-full grid md:grid-cols-3 gap-6 mt-8">
            <ServiceInfoCard
              title="Promotional Videos"
              description="Brand introduction, product showcases, and service highlight videos."
            />
            <ServiceInfoCard
              title="Social Media Reels & Shorts"
              description="High-engagement short-form content optimized for reach and retention."
            />
            <ServiceInfoCard
              title="Ad Video Creatives"
              description="Performance-focused videos designed for Meta and Google Ads campaigns."
            />
            <ServiceInfoCard
              title="Corporate & Event Videos"
              description="Tailored platforms built according to your operational requirements."
            />
            <ServiceInfoCard
              title="YouTube Content Production"
              description="Scripted, edited, and optimized videos for long-form audience building."
            />
          </div>
        </div>

        <div className="mb-16">
          <h1 className="text-3xl md:text-6xl font-bold uppercase text-black ">
            Our Production Process
          </h1>
          <div className="w-full grid md:grid-cols-3 gap-6 mt-8">
            <ServiceInfoCard
              title="Storyboarding & Planning"/>
            <ServiceInfoCard
              title="Professional Shooting"/>
            <ServiceInfoCard
              title="Advanced Editing & Color Grading"/>
            <ServiceInfoCard
              title="Sound Design & Background Scoring"/>
            <ServiceInfoCard
              title="Platform-Specific Optimization"/>
            <ServiceInfoCard
              title="Concept & Script Development"/>
          </div>
        </div>

        <div className="mb-16">
          <h1 className="text-3xl md:text-6xl font-bold uppercase text-black ">
            Why choose Us
          </h1>
          <div className="w-full grid md:grid-cols-3 gap-6 mt-8">
            <ServiceInfoCard
              title="First 3 seconds decide whether viewers continue watching."/>
            <ServiceInfoCard
              title="Captions increase watch time significantly"/>
            <ServiceInfoCard
              title="Short-form videos often outperform static posts in engagement."/>
            <ServiceInfoCard
              title="Emotion-driven storytelling converts better than direct selling."/>
            <ServiceInfoCard
              title="Proper hook placement can double retention rate."/>
          </div>
        </div>

      </section>
    </section>
  );
};

export default MetaAds;
