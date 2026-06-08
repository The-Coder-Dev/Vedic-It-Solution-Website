import PageHeader from '@/components/PageHeader'
import ServiceInfoCard from '@/components/ServiceInfoCard'
import React from 'react'

const MetaAds = () => {
    return (
        <section className='w-full min-h-screen'>
            <PageHeader title='Google ads' description="When customers search with buying intent, your business should appear first — and correctly." />
            <section className='w-full mx-auto max-w-345 px-8 py-20'>
                <div className="mb-16">
                    <h1 className='text-3xl md:text-6xl font-bold uppercase text-black '>What We Manage</h1>
                    <div className="w-full grid md:grid-cols-3 gap-6 mt-8">
                        <ServiceInfoCard title='Search Ads' />
                        <ServiceInfoCard title='Display Ads' />
                        <ServiceInfoCard title='YouTube Ads' />
                        <ServiceInfoCard title='Performance Max Campaigns' />
                        <ServiceInfoCard title='Shopping Ads' />
                        <ServiceInfoCard title='Local & Call-Only Ads' />
                    </div>
                </div>

                <div className="mb-16">
                    <h1 className='text-3xl md:text-6xl font-bold uppercase text-black '>Our Approach</h1>
                    <div className="w-full grid md:grid-cols-3 gap-6 mt-8">
                        <ServiceInfoCard title='Keyword Intent Mapping' />
                        <ServiceInfoCard title='Competitor CPC Analysis' />
                        <ServiceInfoCard title='Conversion Tracking Setup' />
                        <ServiceInfoCard title='Landing Page Optimization' />
                        <ServiceInfoCard title='Continuous A/B Testing' />
                        <ServiceInfoCard title='ROI & ROAS Monitoring' />
                    </div>
                </div>

                <div className="mb-16">
                    <h1 className='text-3xl md:text-6xl font-bold uppercase text-black '>We focus on</h1>
                    <div className="w-full grid md:grid-cols-3 gap-6 mt-8">
                        <ServiceInfoCard title='Cost Per Lead (CPL)' />
                        <ServiceInfoCard title='Quality Score Improvement' />
                        <ServiceInfoCard title='Budget Efficiency' />
                        <ServiceInfoCard title='Click-Through Rate (CTR) Optimization'  />
                        <ServiceInfoCard title='Return on Ad Spend (ROAS)'  />
                </div>
                </div>
            </section>
        </section>
    )
}

export default MetaAds