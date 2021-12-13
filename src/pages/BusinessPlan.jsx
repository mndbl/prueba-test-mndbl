const cardsClass = "text-justify text-gray-800 py-2 px-6 max-w-md border-2 border-blue-600 shadow-lg rounded-md"

export function BusinessPlan() {
    return (
        <div className="bg-white rounded-lg mt-6 px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
           <div className={cardsClass}>
               <header>Research:</header>
               <article>
                   Find out all you can about the other side. When you are trying to meet with a community clinic, read everithing on its website an ask the event.
               </article>
           </div>
           <div className={cardsClass}>
               <header>Consider Alternatives:</header>
               <article>
                   Negotiate with all the alternatives in mind. Beforehand understanding you BATNA (Best  Alternative to a Negoatiated Agrement) protects you from accepting a bad offer and places you in a better negotiating role.
               </article>
           </div>
           <div className={cardsClass}>
               <header>Card Title</header>
               <article>
                   contenido
               </article>
           </div>
           <div className={cardsClass}>
               <header>Card Title</header>
               <article>
                   contenido
               </article>
           </div>
           <div className={cardsClass}>
               <header>Card Title</header>
               <article>
                   contenido
               </article>
           </div>
           <div className={cardsClass}>
               <header>Card Title</header>
               <article>
                   contenido
               </article>
           </div>
           <div className={cardsClass}>
               <header>Card Title</header>
               <article>
                   contenido
               </article>
           </div>
        </div>
    )
}