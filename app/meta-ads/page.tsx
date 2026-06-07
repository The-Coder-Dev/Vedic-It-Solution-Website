import PageHeader from '@/components/PageHeader'
import ServiceInfoCard from '@/components/ServiceInfoCard'
import React from 'react'

const MetaAds = () => {
    return (
        <section className='w-full min-h-screen'>
            <PageHeader title='Meta ads' subtitle='Facebook & Instagram Ads' description="Social media is not about boosting posts - it's about structured funnels " />
            <section className='w-full mx-auto max-w-345 px-8 py-20'>
                <div className="mb-16">
                    <h1 className='text-6xl font-bold uppercase text-black '>We Build</h1>
                    <div className="w-full grid md:grid-cols-3 gap-6 mt-8">
                        <ServiceInfoCard title='Lead Generation Funnels' />
                        <ServiceInfoCard title='Sales Funnels' />
                        <ServiceInfoCard title='Brand Awareness Campaigns' />
                        <ServiceInfoCard title='Retargating Campaigns' />
                        <ServiceInfoCard title='Whatsapp & Messenger Automation Ads' />
                        <ServiceInfoCard title='Ecommerce Conversion Campaigns' />
                    </div>
                </div>

                <div className="mb-16">
                    <h1 className='text-6xl font-bold uppercase text-black '>Our Strategy includes</h1>
                    <div className="w-full grid md:grid-cols-3 gap-6 mt-8">
                        <ServiceInfoCard title='Audience Psychology Research' />
                        <ServiceInfoCard title='Detailed Interest & Behavior Targeting' />
                        <ServiceInfoCard title='Custom & Lookalike Audiences' />
                        <ServiceInfoCard title='Scroll-Stopping Creative Development' />
                        <ServiceInfoCard title='Funnel-Based Retargeting' />
                    </div>
                </div>

                <div className="mb-16">
                    <h1 className='text-6xl font-bold uppercase text-black '>Why we different?</h1>
                    <div className="w-full grid md:grid-cols-3 gap-6 mt-8">
                        <ServiceInfoCard title='70% of Ad Success Depends on Targeting, Not Budget' description='Increasing budget without refining audience = wasted money.' />
                        <ServiceInfoCard title='Landing Page Quality Impacts Cost' description='If your landing page is slow or unclear, Google increases your CPC.' />
                        <ServiceInfoCard title='Retargeting Generates Highest ROI' description='Cold traffic rarely converts immediately. Structured retargeting can increase conversions by 2x–4x.' />
                        <ServiceInfoCard title='Creative Testing Is Mandatory
' description='We test multiple ad creatives simultaneously. The market decides the winner — not assumptions.' />
                        <ServiceInfoCard title='Data > Design' description='Beautiful ads without analytics fail. Every campaign is optimized using data tracking tools.' />
                        <ServiceInfoCard title='First 7 Days Are Critical' description='Initial campaign optimization phase determines long-term performance stability.' />
                    </div>
                </div>
            </section>
        </section>
    )
}

export default MetaAds