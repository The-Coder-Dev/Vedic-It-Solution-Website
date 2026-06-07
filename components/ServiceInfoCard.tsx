interface ContentItem {
  type: 'text' | 'bullets';
  content: string | string[];
}

interface ServiceInfoCardProps{
    title?: string,
    description?: string,
    bullets?: string[],
    content?: ContentItem[],
}

const ServiceInfoCard = ( {title, description, bullets, content} : ServiceInfoCardProps ) => {
  return (
    <div className="p-10 rounded-md h-full hover:bg-primary/5 transition-all duration-300 border border-primary space-y-3 bg-primary/10">
        <h1 className="text-2xl text-primary font-semibold">{title}</h1>
        
        {/* If content prop exists, render it with mixed paragraphs and bullets */}
        {content && content.length > 0 ? (
          <div className="space-y-3">
            {content.map((item, index) => (
              <div key={index}>
                {item.type === 'text' && (
                  <p className="text-black text-sm">{item.content}</p>
                )}
                {item.type === 'bullets' && Array.isArray(item.content) && (
                  <ul className="list-disc list-inside  space-y-2">
                    {item.content.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="text-black l">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ) : (
          <>
            {description && <p className="max-w-xs">{description}</p>}
            {bullets && bullets.length > 0 && (
              <ul className="list-disc list-inside space-y-2 pt-2">
                {bullets.map((bullet, index) => (
                  <li key={index} className="text-gray-700 text-sm">
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
    </div>
  )
}

export default ServiceInfoCard