  import MobileFilter from './MobileFilter'
  import ApplyFilters from './ApplyFilters'
import ZoneBar from './ZoneBar'

  export function Header() {
    return (
      <header className="from-azul-200 gap-2 to-white flex h-[50vh] flex-col items-center justify-center bg-opacity-60 bg-gradient-to-b bg-blend-multiply lg:flex lg:h-[50vh] lg:w-full lg:flex-col lg:items-start lg:justify-center lg:bg-cover lg:bg-center">
        <section className='md:flex w-full flex-col absolute hidden gap-5 justify-center text-slate-500'>
          <ApplyFilters />
        </section>
        <section className='flex flex-col w-4/6 gap-5'>
        <MobileFilter />
        </section>
      </header>
    )
  }

