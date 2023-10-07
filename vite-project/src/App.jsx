import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./index.css"
import gallitoLogo from './assets/gallito-logo.png'
import infocasasLogo from './assets/infocasas-logo.jpg'
import mercadoLibreLogo from './assets/mercadolibre-logo.png'

function App({propertyType, propertyBathrooms, propertyBedrooms, propertyZone, propertyArea, propertyPrice, propertyCurrency, propertyLink, propertyImage, propertyOrigin}) {
  const originBackground = {
    infocasas: infocasasLogo,
    gallito: gallitoLogo,
    mercadolibre: mercadoLibreLogo
  }
  const Background = originBackground[propertyOrigin];
  return (
    <div className="m-auto border-2 border-slate-500 shadow-lg flex w-[80%] max-w-[950px] h-52 justify-start rounded-2xl">
        <div className="w-1/3 max-h-full max-w-full rounded-tl-2xl rounded-bl-2xl bg-no-repeat bg-center bg-cover flex flex-col justify-end items-end" style={{
        background: `url(${propertyImage})`,
        backgroundSize: 'cover', // Añade esta línea para ajustar la imagen al contenedor
      }}>
        <div className='h-14 w-14 relative mb-1 mr-1 rounded-xl' style={{
          background: `url(${Background})`,
          backgroundSize: 'contain',
        }}></div>
        </div>
        <div className="p-3 flex flex-col justify-around" style={{ flex: 1}}>
            <h3 className="text-center m-0">{propertyType} en {propertyZone}</h3>
            <p>{propertyType}</p>
            <p>{propertyZone}</p>
            <span className="text-center font-extrabold font-serif">{propertyCurrency} {propertyPrice}</span>
        </div>
        <div className="w-64 flex flex-col">
            <div className="bg-[#607399] bg-opacity-60
             flex flex-col gap-4 justify-center rounded-2xl mt-1 border-2 h-[150px]">
                <p className="left-3 relative text-white font-semibold">{propertyBathrooms} Baño{propertyBathrooms > 1? 's' : ''}</p>
                <p className="left-3 relative text-white font-semibold">{propertyBedrooms} Dormitorio{propertyBedrooms >1? 's' : ''}</p>
                <p className="left-3 relative text-white font-semibold">{propertyArea !== 0? `${propertyArea} mt2` : 'No hay datos sobre el área'}</p>
            </div>
            <div className="bg-[#CCBC82] text-white font-semibold border-4 flex items-center justify-center m-auto w-36 h-14 rounded-2xl">
                <button className="text-left"><a href={propertyLink}>Consultar</a></button>
            </div>
        </div>
    </div>
  );
};
export default App
