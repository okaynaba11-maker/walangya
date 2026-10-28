
function Developers() {
 
  const developers = [
    {
      name: 'James Panes',
      description: 'Carissa Phase 3',
      role: 'Critical Thinker',
      image: '/images/james.jpg',
      bio: 'Meet Jack the Ripper, ang pinanggalingan ng mga ideya.',
    },
    {
      name: 'Aaron Batumbakal',
      description: 'Gentri Heroes Town',
      role: 'Fixer',
      image: '/images/aaron.jpg',
      bio: 'Responsible for fixing.',
    },
    {
      name: 'Angelie Tutas',
      description: 'Satgab',
      role: 'Designer',
      image: '/images/angelie.jpg',
      bio: 'The one who design it all, lalab',
    },
  ]

  return (
    <section className="pb-8">

      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#426F98]">
         The group who develope all
        </p>

        <h1 className="mt-2 text-3xl font-bold text-[#334B60] sm:text-4xl">
          TaskBloom
        </h1>

        <p className="mt-3 max-w-2xl leading-7 text-[#526B80]">
          We developed this website to provide users with a To-Do List platform that helps them organize, manage, and keep track of their tasks efficiently. Our goal is to help users stay organized and improve their productivity.
        </p>
      </div>

   
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {developers.map((developer) => (
          <article
            key={developer.name}
            className="overflow-hidden rounded-2xl border border-[#C8E8E2] bg-[#F8F7F2] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
           
            <div className="h-24 bg-gradient-to-r from-[#DDEDF9] to-[#F8E8B5]" />

            <div className="-mt-16 flex justify-center">
              <img
                src={developer.image}
                alt={developer.name}
                onError={(event) => {
                
                  event.currentTarget.style.display = 'none'
                  event.currentTarget.nextElementSibling.style.display = 'flex'
                }}
                className="h-32 w-32 rounded-full border-4 border-[#F8F7F2] object-cover shadow-md"
              />

            
              <div
                style={{ display: 'none' }}
                className="h-32 w-32 items-center justify-center rounded-full border-4 border-[#F8F7F2] bg-[#C8E8E2] text-4xl font-bold text-[#32675F] shadow-md"
              >
                {developer.name.charAt(0)}
              </div>
            </div>

            {/* Developer information */}
            <div className="px-6 pb-6 pt-4 text-center">
              <h2 className="break-words text-xl font-bold text-[#334B60]">
                {developer.name}
              </h2>

              <p className="mt-1 text-sm text-[#718096]">
                {developer.description}
              </p>

              <div className="mt-4 inline-block rounded-full bg-[#F8E8B5] px-4 py-2 text-sm font-semibold text-[#795D30]">
                {developer.role}
              </div>

              <div className="mt-5 border-t border-[#C8E8E2] pt-4">
  <p className="text-sm leading-6 text-[#526B80]">
    {developer.bio}
  </p>
</div>
            </div>
          </article>
        ))}
      </div>

      {/* Project information */}
      <div className="mt-8 rounded-2xl border border-[#A9D5F5] bg-[#EAF4FC] p-5 sm:p-6">
        <h2 className="text-lg font-bold text-[#345B7D]">
       Our Project

        </h2>

        <p className="mt-2 leading-7 text-[#345B7D]">
      We used React to provide interactivity, Tailwind CSS for the design, and React Router DOM for navigation between pages. Users can add, complete, delete, and organize tasks into different groups, making task management more convenient and efficient.
      </p>
      </div>
    </section>
  )
}

export default Developers
