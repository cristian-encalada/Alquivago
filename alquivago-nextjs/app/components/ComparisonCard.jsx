import infocasasLogo from '../../public/infocasas-logo.jpg'
import gallitoLogo from '../../public/gallito-logo.png'
import mercadoLibreLogo from '../../public/mercadolibre-logo.png'
import areaIcon from '../../public/areaIcon.svg'
import bathIcon from '../../public/bathIcon.svg'
import bedroomIcon from '../../public/bedroomIcon.svg'
import propertyIcon from '../../public/propertyIcon.svg'
import zoneIcon from '../../public/zoneIcon.svg'
import priceIcon from '../../public/priceIcon.svg'
import Image from 'next/image'

export default function ComparisonCard({ comparisonImage, comparisonBedrooms, comparisonBathrooms, comparisonArea, comparisonType, comparisonZone, comparisonOrigin, comparisonLink, comparisonCurrency, comparisonPrice }) {

  const originBackground = {
    'infocasas': infocasasLogo,
    'gallito': gallitoLogo,
    'mercado_libre': mercadoLibreLogo
  }
  const bg = originBackground[comparisonOrigin]
  return (
    <div className="bg-white border container h-[90vh] flex flex-col justify-around items-center border-gray-200 rounded-lg shadow m-auto">
    <div className='w-2/3 h-2/6 rounded-t-2xl shadow-xl flex justify-end items-end' style={{
          background: `url(${comparisonImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div class={`relative h-20 mr-2 mb-2 w-20 rounded-lg`} style={
            {
              background: `url(${bg.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          }></div>
        </div>
    <div className="flex h-2/5 w-2/3 flex-col items-center justify-around bg-azul-600 shadow-2xl rounded-lg" >
  <span className="flex items-center justify-start gap-5 text-lg font-medium text-azul-50">
  <Image src={bedroomIcon} width={20} height={20} alt=''></Image>
    {comparisonBedrooms >= 1? `${comparisonBedrooms} Dormitorios`: 'No info'}
  </span>
  <span className="flex items-center justify-start text-azul-50 gap-5 text-lg font-medium">
  <Image src={bathIcon} width={20} height={20} alt=''></Image>
    {comparisonBathrooms >1? `${comparisonBathrooms} Baños`: '1 Baño'}
  </span>
  <span className="flex items-center justify-start gap-5 text-azul-50 text-lg font-medium">
  <Image src={areaIcon} width={20} height={20} alt=''></Image>
    {comparisonArea != 0? `${comparisonArea} mt2` : 'No info'}
  </span>
  <span className="flex items-center justify-start text-azul-50 text-lg font-medium gap-5">
  <Image src={propertyIcon} width={20} height={20} alt=''></Image>
    {comparisonType}
  </span>
  <span className="flex items-center justify-start text-lg font-medium text-azul-50 gap-5">
  <Image src={zoneIcon} width={20} height={20} alt=''></Image>
    {comparisonZone}
  </span>
  <span className="flex items-center justify-start gap-5 text-2xl font-medium text-azul-50 ">
  <Image src={priceIcon} width={20} height={20} alt=''></Image>
  {comparisonCurrency == 'UYU'? '$' : 'U$S'} {comparisonPrice}
  </span>
</div>
<a href={comparisonLink} target='_blank' rel='noreferrer' className="w-52 h-20 rounded-lg bg-azul-500 shadow-xl animate-bounce-chiquito hover:scale-125 transition flex justify-center items-center text-azul-100 font-medium text-lg">Consultar</a>
          </div>
  )
}