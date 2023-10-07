import ReactDOM from 'react-dom/client'
import App from './App'
import { data } from 'autoprefixer';

const renderizado = ReactDOM.createRoot(document.getElementById('renderizado'))
const alquiler = [
  {
      "id": "gallito_24437332",
      "url_link": "https://www.gallito.com.uy/alquiler-apto-pocitos-nuevo-duplex-2-dorm-2-ba%C3%B1os-gge-2-inmuebles-24437332",
      "origin": "gallito",
      "operation_type": "Alquiler",
      "price": 75000.0,
      "currency": "$U",
      "state_name": "Montevideo",
      "city_name": "Pocitos Nuevo",
      "property_type": "Apartamento",
      "total_area": 165,
      "bathrooms": 2,
      "bedrooms": 2,
      "location": {
          "latitude": -34.9057328,
          "longitude": -56.1383823
      },
      "images": [
          "https://imagenes.gallito.com/1024x768/231002130810100.jpg",
          "https://imagenes.gallito.com/1024x768/231002130815650.jpg",
          "https://imagenes.gallito.com/1024x768/231002130838620.jpg",
          "https://imagenes.gallito.com/1024x768/231002130901570.jpg",
          "https://imagenes.gallito.com/1024x768/231002130910130.jpg",
          "https://imagenes.gallito.com/1024x768/231002130913870.jpg",
          "https://imagenes.gallito.com/1024x768/231002130918070.jpg",
          "https://imagenes.gallito.com/1024x768/231002130920850.jpg",
          "https://imagenes.gallito.com/1024x768/231002130924400.jpg",
          "https://imagenes.gallito.com/1024x768/231002130942990.jpg",
          "https://imagenes.gallito.com/1024x768/231002130947090.jpg",
          "https://imagenes.gallito.com/1024x768/231002131009010.jpg"
      ]
  },
  {
      "id": "gallito_24437403",
      "url_link": "https://www.gallito.com.uy/apto-sobre-rambla-estrenar-1-dormitorio-patio-y-cochera-inmuebles-24437403",
      "origin": "infocasas",
      "operation_type": "Alquiler",
      "price": 31000.0,
      "currency": "$U",
      "state_name": "Montevideo",
      "city_name": "Punta Gorda",
      "property_type": "Apartamento",
      "total_area": 50,
      "bathrooms": 1,
      "bedrooms": 1,
      "location": {
          "latitude": 0.0,
          "longitude": 0.0
      },
      "images": [
          "https://imagenes.gallito.com/1024x768/231002131925730.jpg",
          "https://imagenes.gallito.com/1024x768/231002131924670.jpg",
          "https://imagenes.gallito.com/1024x768/231002131926120.jpg",
          "https://imagenes.gallito.com/1024x768/231002131924870.jpg",
          "https://imagenes.gallito.com/1024x768/231002131924760.jpg",
          "https://imagenes.gallito.com/1024x768/231002131925310.jpg",
          "https://imagenes.gallito.com/1024x768/231002131925010.jpg",
          "https://imagenes.gallito.com/1024x768/231002131925200.jpg",
          "https://imagenes.gallito.com/1024x768/231002131925470.jpg",
          "https://imagenes.gallito.com/1024x768/231002131925580.jpg",
          "https://imagenes.gallito.com/1024x768/231002131925840.jpg",
          "https://imagenes.gallito.com/1024x768/231002131924540.jpg"
      ]
  },
  {
      "id": "gallito_24437409",
      "url_link": "https://www.gallito.com.uy/apto-sobre-rambla-estrenar-1-dormitorio-y-cochera-inmuebles-24437409",
      "origin": "gallito",
      "operation_type": "Alquiler",
      "price": 29500.0,
      "currency": "$U",
      "state_name": "Montevideo",
      "city_name": "Punta Gorda",
      "property_type": "Apartamento",
      "total_area": 35,
      "bathrooms": 1,
      "bedrooms": 1,
      "location": {
          "latitude": 0.0,
          "longitude": 0.0
      },
      "images": [
          "https://imagenes.gallito.com/1024x768/231002132857820.jpg",
          "https://imagenes.gallito.com/1024x768/231002132859940.jpg",
          "https://imagenes.gallito.com/1024x768/231002132858140.jpg",
          "https://imagenes.gallito.com/1024x768/231002132857940.jpg",
          "https://imagenes.gallito.com/1024x768/231002132858300.jpg",
          "https://imagenes.gallito.com/1024x768/231002132858390.jpg",
          "https://imagenes.gallito.com/1024x768/231002132858550.jpg",
          "https://imagenes.gallito.com/1024x768/231002132858820.jpg",
          "https://imagenes.gallito.com/1024x768/231002132858880.jpg",
          "https://imagenes.gallito.com/1024x768/231002132859000.jpg",
          "https://imagenes.gallito.com/1024x768/231002132859320.jpg"
      ]
  },
  {
      "id": "gallito_24437426",
      "url_link": "https://www.gallito.com.uy/mts-rmbla-pocitos-3-drmitorios-gge-piscinas-calef-vigilanc-inmuebles-24437426",
      "origin": "gallito",
      "operation_type": "Alquiler",
      "price": 55000.0,
      "currency": "$U",
      "state_name": "Montevideo",
      "city_name": "Pocitos",
      "property_type": "Apartamento",
      "total_area": 100,
      "bathrooms": 3,
      "bedrooms": 3,
      "location": {
          "latitude": -34.9097097,
          "longitude": -56.1454848
      },
      "images": [
          "https://imagenes.gallito.com/1024x768/231002134219560.jpg",
          "https://imagenes.gallito.com/1024x768/231002134258390.jpg",
          "https://imagenes.gallito.com/1024x768/231002142157950.jpg",
          "https://imagenes.gallito.com/1024x768/231002134319500.jpg",
          "https://imagenes.gallito.com/1024x768/231002134331520.jpg",
          "https://imagenes.gallito.com/1024x768/231002134340630.jpg",
          "https://imagenes.gallito.com/1024x768/231002134417880.jpg",
          "https://imagenes.gallito.com/1024x768/231002134427470.jpg",
          "https://imagenes.gallito.com/1024x768/231002140222540.jpg",
          "https://imagenes.gallito.com/1024x768/231002142942860.jpg",
          "https://imagenes.gallito.com/1024x768/231002134508210.jpg",
          "https://imagenes.gallito.com/1024x768/231002140256770.jpg"
      ]
  },
  {
      "id": "gallito_24437640",
      "url_link": "https://www.gallito.com.uy/local-sobre-avenida-inmuebles-24437640",
      "origin": "gallito",
      "operation_type": "Alquiler",
      "price": 22000.0,
      "currency": "$U",
      "state_name": "Montevideo",
      "city_name": "Union",
      "property_type": "Local",
      "total_area": 0,
      "bathrooms": 40,
      "bedrooms": 1,
      "location": {
          "latitude": -34.870381,
          "longitude": -56.1350349
      },
      "images": [
          "https://imagenes.gallito.com/1024x768/231002163249930.jpg",
          "https://imagenes.gallito.com/1024x768/231002163256650.jpg",
          "https://imagenes.gallito.com/1024x768/231002163302780.jpg",
          "https://imagenes.gallito.com/1024x768/231002163308900.jpg",
          "https://imagenes.gallito.com/1024x768/231002163315420.jpg",
          "https://imagenes.gallito.com/1024x768/231002163321500.jpg",
          "https://imagenes.gallito.com/1024x768/231002163327920.jpg",
          "https://imagenes.gallito.com/1024x768/231002163336890.jpg",
          "https://imagenes.gallito.com/1024x768/231002163344510.jpg",
          "https://imagenes.gallito.com/1024x768/231002163354290.jpg",
          "https://imagenes.gallito.com/1024x768/231002163414920.jpg"
      ]
  },
  {
      "id": "gallito_23268617",
      "url_link": "https://www.gallito.com.uy/parodi-muy-linda-planta-frente-al-mar-inmuebles-23268617",
      "origin": "gallito",
      "operation_type": "Alquiler",
      "price": 1800.0,
      "currency": "U$S",
      "state_name": "Montevideo",
      "city_name": "Pocitos",
      "property_type": "Apartamento",
      "total_area": 184,
      "bathrooms": 2,
      "bedrooms": 3,
      "location": {
          "latitude": 0.0,
          "longitude": 0.0
      },
      "images": [
          "https://imagenes.gallito.com/1024x768/49795193.jpg",
          "https://imagenes.gallito.com/1024x768/49795194.jpg",
          "https://imagenes.gallito.com/1024x768/49795195.jpg",
          "https://imagenes.gallito.com/1024x768/49795196.jpg",
          "https://imagenes.gallito.com/1024x768/49795197.jpg",
          "https://imagenes.gallito.com/1024x768/49795198.jpg",
          "https://imagenes.gallito.com/1024x768/49795199.jpg",
          "https://imagenes.gallito.com/1024x768/49795200.jpg",
          "https://imagenes.gallito.com/1024x768/49795201.jpg",
          "https://imagenes.gallito.com/1024x768/49795202.jpg",
          "https://imagenes.gallito.com/1024x768/49795203.jpg",
          "https://imagenes.gallito.com/1024x768/49795204.jpg"
      ]
  },
  {
      "id": "gallito_24340980",
      "url_link": "https://www.gallito.com.uy/apto-al-frente-amplio-excelente-ubicacion-y-bajos-gastos-inmuebles-24340980",
      "origin": "mercadolibre",
      "operation_type": "Alquiler",
      "price": 29000.0,
      "currency": "$U",
      "state_name": "Montevideo",
      "city_name": "Cordon",
      "property_type": "Apartamento",
      "total_area": 82,
      "bathrooms": 2,
      "bedrooms": 3,
      "location": {
          "latitude": -34.9021429,
          "longitude": -56.1798385
      },
      "images": [
          "https://imagenes.gallito.com/1024x768/230912170326870.jpg",
          "https://imagenes.gallito.com/1024x768/230912170333950.jpg",
          "https://imagenes.gallito.com/1024x768/230912170340960.jpg",
          "https://imagenes.gallito.com/1024x768/230912170349380.jpg",
          "https://imagenes.gallito.com/1024x768/230912170359170.jpg",
          "https://imagenes.gallito.com/1024x768/230912170414820.jpg",
          "https://imagenes.gallito.com/1024x768/230912170424790.jpg",
          "https://imagenes.gallito.com/1024x768/230912170431900.jpg",
          "https://imagenes.gallito.com/1024x768/230912170438810.jpg",
          "https://imagenes.gallito.com/1024x768/230912170450680.jpg",
          "https://imagenes.gallito.com/1024x768/230912170459650.jpg",
          "https://imagenes.gallito.com/1024x768/230912170509020.jpg"
      ]
  },
]

renderizado.render(
  <section className='flex flex-col gap-2'>
    {alquiler.map(publish => (
      <App
        propertyArea={publish.total_area}
        propertyImage={publish.images && publish.images[0]}
        propertyBathrooms={publish.bathrooms}
        propertyBedrooms={publish.bedrooms}
        propertyType={publish.property_type}
        propertyCurrency={publish.currency}
        propertyZone={publish.city_name}
        propertyPrice={publish.price}
        propertyLink={publish.url_link}
        propertyOrigin={publish.origin}
        key={publish.id}
      />
    ))}
  </section>
);
