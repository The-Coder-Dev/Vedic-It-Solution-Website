import React from 'react'

const cardData = [
    {
        number: "80+",
        title: "Projects Completed",
        id: 1
    },
    {
        number: "95%",
        title: "Client Satisfaction",
        id: 2
    },
    {
        number: "40+",
        title: "Brands Served",
        id: 3
    },
]

const StatsCard = () => {
    return (
        <>
            {cardData.map((item) => (
                <div key={item.id} className="flex flex-col gap-10 mb-10">
                    <h1 className="text-6xl font-bold mb-12">{item.number}</h1>
                    <div className="flex flex-col gap-3">
                        <h2 className="text-4xl font-semibold">{item.title}</h2>
                    </div>
                </div>
            ))}
        </>
    )
}

export default StatsCard