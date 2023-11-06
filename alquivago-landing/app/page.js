import Image from 'next/image'
import { Flask} from './assets/flask.svg'

export default function Home() {
  return (
  <main className="leading-normal tracking-normal text-white bg-cyan-600">
  <nav id="header" className="fixed w-full z-30 top-0 text-white bg-white">
    <div className="w-full container mx-auto flex flex-wrap items-center justify-center md:justify-start mt-0 py-2">
      <div className="pl-4 flex items-center">
        <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl flex"
          href="http://alquivago.vercel.app" target="_blank" rel="noreferrer">
          <p className="text-cyan-600">alqui</p>
          <p className="text-red-600">va</p>
          <p className="text-yellow-400">go</p>
        </a>
        <div className="absolute top-3 hidden right-5 md:flex">
          <p className="text-black">Powered by:</p>
          <a href="https://flask.palletsprojects.com/en/3.0.x/" target="_blank" rel="noreferrer"><img
              src={Flask}
              className="ml-2 w-10 h-10 opacity-50 hover:opacity-100 hover:scale-110 transition"></img></a>
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer"><img src="assets/next.svg"
              className="ml-2 w-10 h-10 opacity-50 hover:opacity-100 hover:scale-110 transition"></img></a>
          <a href="https://www.selenium.dev/" target="_blank" rel="noreferrer"><img src="assets/selenium.svg"
              className="ml-2 w-10 h-10 opacity-50 hover:opacity-100 hover:scale-110 transition"></img></a>
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><img src="assets/tailwind.svg"
              className="ml-2 w-10 h-10 opacity-50 hover:opacity-100 hover:scale-110 transition"></img></a>
          <a href="https://www.docker.com/" target="_blank" rel="noreferrer"><img src="assets/docker.svg"
              className="ml-2 w-10 h-10 opacity-50 hover:opacity-100 hover:scale-110 transition"></img></a>
          <a href="https://www.mongodb.com/es" target="_blank" rel="noreferrer"><img src="assets/mongo.svg"
              className="ml-2 w-10 h-10 opacity-50 hover:opacity-100 hover:scale-110 transition"></img></a>
          <a href="https://airflow.apache.org/" target="_blank" rel="noreferrer"><img src="assets/airflow.svg"
              className="ml-2 w-10 h-10 opacity-50 hover:opacity-100 hover:scale-110 transition"></img></a>

        </div>
      </div>
      </div>

  </nav>
  <div className="pt-24">
    <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
        <h1 className="my-4 text-5xl font-bold leading-tight">
          Buscá con nosotros, te ayudamos a cumplir tus sueños !
        </h1>
        <p className="leading-normal text-2xl mb-8">
          Ofrecemos las mejores propiedades y un servicio de exelencia.
        </p>

      </div>
      <div className="w-full md:w-3/5 py-6 text-center">
        <img className="w-full md:w-4/5 z-50" src="logo.svg" />
      </div>
    </div>
  </div>
  <div className="relative -mt-12 lg:-mt-24">
    <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
          <path
            d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
            opacity="0.100000001"></path>
          <path
            d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
            opacity="0.100000001"></path>
          <path
            d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
            id="Path-4" opacity="0.200000003"></path>
        </g>
        <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
          <path
            d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z">
          </path>
        </g>
      </g>
    </svg>
  </div>
  <section className="bg-white border-b py-8">
    <div className="container max-w-5xl mx-auto m-8">
      <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        Funcionalidades
      </h2>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-5/6 sm:w-1/2 p-6">
          <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
            Que es Alquivago?
          </h3>
          <br />
          <br />
          <p className="text-gray-600 mb-8 text-xl text-center py-5 px-5 bg-slate-50 font-medium rounded-2xl shadow-xl">
            Alquivago es un servicio web/movil que compara alquileres a largo plazo de distintas fuentes para ayudar al
            cliente a elegir su alquiler más adecuado
            <br />
            <br />

          </p>
        </div>
        <div className="w-full sm:w-1/2 p-6">
          <img src="rent.svg" alt=""/>
        </div>
      </div>
      </div>
      <div className="flex flex-wrap flex-col-reverse sm:flex-row">
        <div className="w-full sm:w-1/2 p-6 mt-6">
          <img src="map.svg" alt=""/>
        </div>
        <div className="w-full sm:w-1/2 p-6 mt-6">
          <div className="align-middle">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Geolocalizacion
            </h3>
            <br />
            <br />
            <p className="text-gray-600 mb-8 text-xl text-center py-5 px-5 bg-slate-50 rounded-2xl shadow-xl">
              La aplicación cuenta con un mapa con marcadores para facilitar la rápida ubicación de las propiedades en
              alquiler. Además, es posible visualizar un mapa dividido por zonas para tener una visión general del
              número total de propiedades en alquiler en Montevideo.
              <br />
              <br />

            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3 mt-10">
              Servicios de Comparacion
            </h3>
            <br />
            <br />
            <p className="text-gray-600 mb-8 text-xl text-center py-5 px-5 bg-slate-50 rounded-2xl shadow-xl">
              Nuestra aplicación revoluciona la forma en que encuentras los alquileres de mayor calidad en el mercado.
              Lo hacemos a través de una interfaz intuitiva y fácil de usar que te permite comparar y elegir entre las
              opciones más destacadas con un enfoque profesional.
              <br />
              <br />
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <img src="undraw_split_testing_l1uw.svg" alt=""/>
          </div>
        </div>

      </div>
  </section>
  <section className="w-full flex  flex-col justify-start gap-10 items-center bg-slate-100">
    <br />
    <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
      Nuestras Fuentes
      <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
    </h2>
    <br />
    <div className="container flex flex-wrap justify-center gap-5">
      <img src="gallito-logo1 (1).png" alt="img" className="opacity-50 hover:opacity-100 hover:scale-110 transition h-24"/>
      <img src="infocasas-logo1.webp" alt="img" className="opacity-50 hover:opacity-100 hover:scale-110 transition h-24"/>
      <img src="png-mercado.png" alt="img" className="opacity-50 hover:opacity-100 hover:scale-110 transition h-24/"/>
    </div>
    <br />
    <br />
    </section>
  <section className="bg-gray-100 py-8 ">

    <div className="container mx-auto px-2 pt-4 pb-12  text-gray-800">
      <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        Equipo de Desarrollo
      </h2>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
    </div>
    <div className="flex gap-10 justify-center flex-wrap">



      <div className="flex flex-col items-center pb-10">
        <img className="w-80 h-80 mb-3 rounded-full shadow-lg" src="ch.jpg" alt="Bonnie image" />
        <h5 className="mb-1 text-xl font-medium text-black dark:text-black">Cristian Encalada</h5>
        <span className="text-sm text-black dark:text-black text-center">Project Manager <br />Full-Stack</span>
        <br />
        <div className="flex items-center justify-center gap-5 w-full">
          <a href="https://www.linkedin.com/in/jos%C3%A9-cristian-encalada-camargo-45099616a/" target="_blank"
            rel="noreferrer" className="opacity-50 hover:scale-125 transition hover:opacity-100"> <img src="logoln.png"
              className="rounded-full" alt="img" width="80"/></a>
          <a href="https://github.com/cristian-encalada" target="_blank" rel="noreferrer"
            className="opacity-50 hover:scale-125 transition hover:opacity-100"> <img src="g.png" className="rounded-full"
              alt="img" width="80"/></a>
        </div>
      </div>
      </div>

      <div className="flex flex-col items-center pb-10">
        <img className="w-80 h-80 mb-3 rounded-full shadow-lg" src="Alejandro_Martinez.png" alt="Bonnie image" />
        <h5 className="mb-1 text-xl font-medium text-black dark:text-black">Alejandro Martinez</h5>
        <span className="text-sm text-black dark:text-black text-center">UX/UI Designer <br />Full-Stack</span>
        <br />
        <div className="flex items-center justify-center w-full gap-5">
          <a href="https://www.linkedin.com/in/jos%C3%A9-cristian-encalada-camargo-45099616a/" target="_blank"
            rel="noreferrer" className="opacity-50 hover:scale-125 transition hover:opacity-100"> <img src="logoln.png"
              className="rounded-full" alt="img" width="80"/></a>
          <a href="https://github.com/cristian-encalada" target="_blank" rel="noreferrer"
            className="opacity-50 hover:scale-125 transition hover:opacity-100"> <img src="g.png" className="rounded-full"
              alt="img" width="80"/></a>
        </div>
      </div>
      <div className="flex flex-col items-center pb-10">
        <img className="w-80 h-80 mb-3 rounded-full shadow-lg" src="Gabr /iel_Delgado.png" alt="Bonnie image" />
        <h5 className="mb-1 text-xl font-medium text-black dark:text-black">Gabr /iel Delgado</h5>
        <span className="text-sm text-black dark:text-black text-center">UX/UI Designer <br />Full-Stack</span>
        <br />
        <div className="flex items-center justify-center w-full gap-5">
          <a href="https://www.linkedin.com/in/jos%C3%A9-cristian-encalada-camargo-45099616a/" target="_blank"
            rel="noreferrer" className="opacity-50 hover:scale-125 transition hover:opacity-100"> <img src="logoln.png"
              className="rounded-full" alt="img" width="80"/></a>
          <a href="https://github.com/cristian-encalada" target="_blank" rel="noreferrer"
            className="opacity-50 hover:scale-125 transition hover:opacity-100"> <img src="g.png" className="rounded-full"
              alt="img" width="80"/></a>
        </div>
      </div>
      <div className="flex flex-col items-center pb-10">
        <img className="w-80 h-80 mb-3 rounded-full shadow-lg" src="Emiliano_Garin.jpg" alt="Bonnie image" />
        <h5 className="mb-1 text-xl font-medium text-black dark:text-black">Emiliano Garin</h5>
        <span className="text-sm text-black dark:text-black text-center">API Manager<br />Back-End</span>
        <br />
        <div className="flex items-center justify-center w-full gap-5">
          <a href="https://www.linkedin.com/in/jos%C3%A9-cristian-encalada-camargo-45099616a/" target="_blank"
            rel="noreferrer" className="opacity-50 hover:scale-125 transition hover:opacity-100"> <img src="logoln.png"
              className="rounded-full" alt="img" width="80"/></a>
          <a href="https://github.com/cristian-encalada" target="_blank" rel="noreferrer"
            className="opacity-50 hover:scale-125 transition hover:opacity-100 rounded-full"> <img src="g.png"
              className="rounded-full" alt="img" width="80"/></a>
        </div>
      </div>
      <div className="flex flex-col items-center pb-10">
        <img className="w-80 h-80 mb-3 rounded-full shadow-lg" src="Martin_Leiro.jpg" alt="Bonnie image" />
        <h5 className="mb-1 text-xl font-medium text-black dark:text-black">Martin Leiro</h5>
        <span className="text-sm text-black dark:text-black text-center">src Engineer / Web scraper<br />Back-End</span>
        <br />
        <div className="flex items-center justify-center w-full gap-5">
          <a href="https://www.linkedin.com/in/jos%C3%A9-cristian-encalada-camargo-45099616a/" target="_blank"
            rel="noreferrer" className="opacity-50 hover:scale-125 transition hover:opacity-100"> <img src="logoln.png"
              className="rounded-full" alt="img" width="80"/></a>
          <a href="https://github.com/cristian-encalada" target="_blank" rel="noreferrer"
            className="opacity-50 hover:scale-125 transition hover:opacity-100 rounded-full"> <img src="g.png"
              className="rounded-full" alt="img" width="80"/></a>
        </div>
      </div>







  </section>
  <section className="flex flex-col md:hidden justify-center items-center h-max bg-white">
    <h1 className="font-medium text-lg font-mono text-black">Powered by</h1>
    <div className="container h-max bg-white flex  items-center flex-wrap justify-center gap-5">
      <img src="assets/selenium.svg" className="hover:scale-110 hover:opacity-100 opacity-70 transition"/>
      <img src="assets/tailwind.svg" className="hover:scale-110 hover:opacity-100 opacity-70 transition"/>
      <img src="assets/flask.svg" className="hover:scale-110 hover:opacity-100 opacity-70 transition"/>
      <img src="assets/next.svg" className="hover:scale-110 hover:opacity-100 opacity-70 transition"/>
      <img src="assets/docker.svg" className="hover:scale-110 hover:opacity-100 opacity-70 transition"/>
      <img src="assets/mongo.svg" className="hover:scale-110 hover:opacity-100 opacity-70 transition h-24 w-24"/>
      <img src="assets/airflow.svg" className="hover:scale-110 hover:opacity-100 opacity-70 transition h-24 w-24"/>
    </div>
  </section>
  <svg className="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
        <g className="wave" fill="#f8fafc">
          <path
            d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z">
          </path>
        </g>
        <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
          <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
            <path
              d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
              opacity="0.100000001"></path>
            <path
              d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
              opacity="0.100000001"></path>
            <path
              d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
              opacity="0.200000003"></path>
          </g>
        </g>
      </g>
    </g>
  </svg>
  <section className="container mx-auto text-center py-6 mb-12">
    <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
      Visitanos en alquivago!
    </h2>
    <div className="w-full mb-4">
      <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
    </div>

    <button
      className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
      <a target="_blank" rel="noreferrer" href="https://alquivago.vercel.app">Entrar!</a>
    </button>
  </section>
</main>
)
}
