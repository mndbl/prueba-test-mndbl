const cardsClass = "text-justify text-gray-800 py-2 px-6 max-w-md border-2 border-blue-600 shadow-lg rounded-md"

const temas = [
    { tittle: 'Research:', paragraph: 'Find out all you can about the other side. When you are trying to meet with a community clinic, read everithing on its website an ask the event.' },
    { tittle: 'Consider Alternatives:', paragraph: 'Negotiate with all the alternatives in mind. Beforehand understanding you BATNA (Best  Alternative to a Negoatiated Agrement) protects you from accepting a bad offer and places you in a better negotiating role.' },
    { tittle: 'Anticipate the desires and needs of the other party:', paragraph: 'Think about what the key concems of the other party are going to be. This will help you come up with techniques for managing your position. Estimate the possible shortcomings of the other side in arriving at an agreement. Consider the BATNA of your counterpart; what will possibly be their next best option.' },
    { tittle: 'Establish our range of negotiations:', paragraph: 'Identifying for each of the issues you have unbounded, set an optimun, minimun  and target objetive. Identify the ZOPA (possible area of agreement) in order to compromise and reach an agrement.' },
    { tittle: 'Options:', paragraph: 'Always consider other options to close the deal: do not stick to a single plan. Include conditions, trades and contingencies to meet the need of the other party.' },
    { tittle: 'Communications:', paragraph: 'Successful negotiation mar depend on your communication choice, such as whether you are treatening or acquiescing, brainstorming together or making firm demands, making silent assumptions about interest, or asking questions to examine them more deeply.' },
]


export function BusinessPlan() {
    return (
        <div className="bg-white rounded-lg mt-6 px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
            {temas.map(tema => {
               return <div key={tema.tittle} className={cardsClass}>
                    <header className="font-bold">{tema.tittle}</header>
                    <article>
                        {tema.paragraph}
                    </article>
                </div>
            })}
        </div>
    )
}