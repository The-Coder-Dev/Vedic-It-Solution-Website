import React from 'react'

const cardData = [
    {
        number: "80+",
        title: "Projects Completed",
        description: "Empowering brands with, high-performing designs",
        id: 1
    },
    {
        number: "95%",
        title: "Client Satisfaction",
        description: "Empowering brands with, high-performing designs",
        id: 2
    },
    {
        number: "40+",
        title: "Brands Served",
        description: "Empowering brands with, high-performing designs",
        id: 3
    },
]

const StatsCard = () => {
    return (
        <>
            {cardData.map((item) => (
                <div key={item.id} className="flex flex-col gap-10 p-8">
                    <h1 className="text-6xl font-bold mb-12">{item.number}</h1>
                    <div className="flex flex-col gap-3">
                        <h2 className="text-4xl font-semibold">{item.title}</h2>
                        <p className="max-w-60">{item.description}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default StatsCard