import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./index.css"

function App({propertyType, propertyBathrooms, propertyBedrooms, propertyZone, propertyArea, propertyPrice, propertyCurrency, propertyImage}) {
  return (
    <section className='flex'>
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl g flex flex-wrap">
      <img className="w-full h-1/2" src={propertyImage} alt="Property Image" />
      <div className="px-6 py-4">
        <div className="mb-2">
          <h2 className="text-xl font-bold text-gray-900 text-center">{propertyType} en {propertyZone}</h2>
          <div className="flex items-center">
            <div className="mr-2 rounded-full bg-blue-600 py-1 px-2 text-xs font-medium text-white">{propertyType}</div>
            <div className="rounded-full bg-yellow-500 py-1 px-2 text-xs font-medium text-white">{propertyZone}</div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <img src="https://img.icons8.com/windows/24/null/bedroom.png" alt="Bedroom Icon" />
            <p className="ml-2 text-sm font-medium text-gray-700">{propertyBathrooms} Bedrooms</p>
          </div>
          <div className="flex items-center">
            <img src="https://img.icons8.com/pastel-glyph/24/null/bath--v2.png" alt="Bathroom Icon" />
            <p className="ml-2 text-sm font-medium text-gray-700">{propertyBedrooms} Bathrooms</p>
          </div>
          <div className="flex items-center">
            <img src="https://img.icons8.com/ios-glyphs/24/null/expand--v1.png" alt="Area Icon" />
            <p className="ml-2 text-sm font-medium text-gray-700">{propertyArea} sqm</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-3xl font-extrabold text-blue-800 text-center">{propertyCurrency} {propertyPrice}</p>
        </div>
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://via.placeholder.com/50" alt="Agent Image" className="mr-2 rounded-full object-cover" />
          <div>
            <p className="text-sm font-medium text-gray-800">Agent Name</p>
            <p className="text-xs text-gray-600">Real Estate Agent</p>
          </div>
        </div>
        <div className="flex">
          <a href="tel:+1234567890" className="mr-2 rounded-full bg-gray-300 p-1 text-gray-700 hover:text-gray-800">
            <img src="https://img.icons8.com/color/24/null/ringer-volume.png" alt="Phone Icon" />
          </a>
          <a href="https://wa.me/1234567890" className="rounded-full bg-green-500 p-1 text-white hover:bg-green-600">
            <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/null/external-WhatsApp-social-media-those-icons-lineal-color-those-icons.png" alt="WhatsApp Icon" />
          </a>
        </div>
      </div>
    </div>
    </section>
  );
};
export default App
