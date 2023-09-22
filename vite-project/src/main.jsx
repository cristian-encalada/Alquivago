import ReactDOM from 'react-dom/client'
import App from './App'

const renderizado = ReactDOM.createRoot(document.getElementById('renderizado'))
const infocasas = [
    {
        "id": "infocasas_190540664",
        "url_link": "https://www.infocasas.com.uy/ed-alquimia-alquiler-de-1-dormitorio/190540664",
        "price": 30000.0,
        "exchange": "$",
        "state_name": "Montevideo",
        "city_name": "Pocitos",
        "PROPERTY_TYPE": "Apartamento",
        "TOTAL_AREA": 40,
        "FULL_BATHROOMS": 1,
        "BEDROOMS": 1,
        "location": {
            "latitude": -34.9166534,
            "longitude": -56.1583685
        },
        "imagenes": [
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.9caa37dde145eb4ae233a7e398e52a9f133e1923.jpg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.8fbeb5d925d7159e51089976534b02db3651127c.jpg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.f84522353d801d94bdbf7127c633d3c3e5ececa5.jpg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.ce63753a19cd6ac412af809c093f085a3986c0f2.jpg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.532186e62871d0161560949c5fadc88b28abf1a6.jpg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.71643c7d83d32ea2bdb02e378cd401f81e13a2bf.jpg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.7a56ff2c18307fb3a1af3a7ea6a3d9ab2fb89bd5.jpg"
        ]
    },
    {
        "id": "infocasas_190580638",
        "url_link": "https://www.infocasas.com.uy/monoambiente-excelente-estado-1er-piso-por-escalera/190580638",
        "price": 16500.0,
        "exchange": "$",
        "state_name": "Montevideo",
        "city_name": "La Blanqueada",
        "PROPERTY_TYPE": "Apartamento",
        "TOTAL_AREA": 35,
        "FULL_BATHROOMS": 1,
        "BEDROOMS": 0,
        "location": {
            "latitude": -34.8712514,
            "longitude": -56.1601133
        },
        "imagenes": [
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.f505b03a68be552fee86b1e5b7b0539a16ad9263.jpeg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.78a0db578c828fbb0e21e59cbadd836e34f1033e.jpeg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.6c02d2b41cda9109034edc795a3837fb6654df3e.jpeg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.ed164c52577276beaff1fb9a7fe586d09e91f803.jpeg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.a8a41292617cc2604fc0cecba8598151f605441e.jpeg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.d0f92dcc979e014555d9e7ab956deae0af30e8cb.jpeg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.6d750b68d82a3d949500ae20a17e46415ca525e9.jpeg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.e05645e65f283527dfe2569b7486adac8d68d600.jpeg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.066d66472327559ad0081604cce6936e724df0b4.jpeg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.e510d91dc35b575d6368e8ed4f518f3250cb0db4.jpeg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.2bc9e78dffd950e717134a80990873d7ab1685f9.jpeg"
        ]
    },
    {
        "id": "infocasas_190577477",
        "url_link": "https://www.infocasas.com.uy/hermoso-apartamento-sobre-la-rambla-garage/190577477",
        "price": 1600.0,
        "exchange": "U$S",
        "state_name": "Montevideo",
        "city_name": "Pocitos",
        "PROPERTY_TYPE": "Apartamento",
        "TOTAL_AREA": 95,
        "FULL_BATHROOMS": 3,
        "BEDROOMS": 4,
        "location": {
            "latitude": -34.9095706,
            "longitude": -56.1412773
        },
        "imagenes": [
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.d68df1eab758e790a8540133dbe67c0ec834afc4.jpeg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.806c65c309b88ea6bf61f0a4aba6c86933cf423e.jpeg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.fa0aea5c8ac33e1f21e2b9c9f5936d3522e58e1e.jpeg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.60951d096479bc323f059cbeb4d13593b0a92f71.jpeg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.c06d670c6bc862964d0a1026ca8f973ac33faa0d.jpeg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.2e4cc51503426d8e3a74cb9545cf80edca9a9d33.jpeg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.539ecb3287b2990ffd33f0dd4852e054149e157d.jpeg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.9540bdff31b19f6291b152f2fa1cf9ae530c2244.jpeg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.a8c7b355396595ecf005327c20eef0de2dd16478.jpeg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.232fdcaf59caecda373c00a8b9c47771a3916d3d.jpeg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.4c4c6cc64fd461d065a210994ae930b7387f8cf9.jpeg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.fe8708eadfd2f2f45a53cb7fab0d7caa5e4b46db.jpeg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.c8128d550298322c05b3dc978f8be5e6cf3958af.jpeg"
        ]
    },
    {
        "id": "infocasas_190568493",
        "url_link": "https://www.infocasas.com.uy/alquiler-apartamento-temporada-1-dormitorio/190568493",
        "price": 3600.0,
        "exchange": "U$S",
        "state_name": "Maldonado",
        "city_name": "Punta del Este",
        "PROPERTY_TYPE": "Apartamento",
        "TOTAL_AREA": 79,
        "FULL_BATHROOMS": 1,
        "BEDROOMS": 1,
        "location": {
            "latitude": -34.9451169,
            "longitude": -54.927152
        },
        "imagenes": [
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.7f149924c07a69e3f6d520325a6347aee4eb1e59.jpg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.3f4fcba23f24bed22b84db38ae48fb3aea7106c1.jpg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.d0da711715917ff532d2431ed9ba2975c83d560a.jpg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.bc2da81687344fafefdb58dc355df1a83ad4b54b.jpg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.e9774bfd2ef3476cea63f87d2a42eacfadb8c40f.jpg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.347b672ad52b448ec749266edc54816a3fd232a4.jpg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.764ee4a7bcdfd6a37fcd393bdb7d59d93d4859d2.jpg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.0db8717f7521d12fbcc644edc2bcd1a4876c0344.jpg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.ea953a26d65cc29a9f73ca386823aa21d7eef690.jpg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.fcba4064fbfc5b1e512243f7d5d48d97816c8691.jpg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.c59ee16483f1ab3d98959271b463b27b99969b0e.jpg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.4401a48910acd77de9ab886bd7057e7df87dd2bd.jpg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.9b69f00914400f921f4953b44177f763bf82cc9a.jpg"
        ]
    },
    {
        "id": "infocasas_190415491",
        "url_link": "https://www.infocasas.com.uy/local-comercial-sobre-8-de-octubre/190415491",
        "price": 18000.0,
        "exchange": "$",
        "state_name": "Montevideo",
        "city_name": "Maroñas",
        "PROPERTY_TYPE": "Local Comercial",
        "TOTAL_AREA": 45,
        "FULL_BATHROOMS": 1,
        "BEDROOMS": 3,
        "location": {
            "latitude": 0.0,
            "longitude": 0.0
        },
        "imagenes": [
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.13897cd932380aa2c89c1c8b99b0d81452887cec.jpg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.94352dde408e6efd3262643c9955069bc8fe5052.jpg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.e86df8d82fad258e1e13bad2a196d60887047a43.jpg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.9f49c9e19a927113bea7079dc6151a20f312d410.jpg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.320bc96243d6fe8cf7103cd97b886fc9a90c8487.jpg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.d647be614a4994c496dd224116864ffcd9eec7c6.jpg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.fb48bff40dd459ec2abd1c9ee7ab44a21a1f9606.jpg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.98f5a71024f1b74f85e4bf3429caf0ecd4c8d6b3.jpg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.83e7244bc42d7a3fb1bf9bd2f07453c0f343d42c.jpg",
            "https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.28109006d5dcd5de143ed48e78dca70e33aba4c5.jpg"
        ]
    },
    {
        "id": "infocasas_189655089",
        "url_link": "https://www.infocasas.com.uy/departamento-parque-batlle-complejo-privado-molino-del-parque/189655089",
        "price": 1300.0,
        "exchange": "U$S",
        "state_name": "Montevideo",
        "city_name": "Parque Batlle",
        "PROPERTY_TYPE": "Apartamento",
        "TOTAL_AREA": 115,
        "FULL_BATHROOMS": 2,
        "BEDROOMS": 2,
        "location": {
            "latitude": -34.8969816,
            "longitude": -56.14938
        },
        "imagenes": [
            "https://cdn2.infocasas.com.uy/web/th.outside500x1.64d4de53e6fb3_infocdn.jpg",
            "https://cdn2.infocasas.com.uy/web/th.outside500x1.64d4de59c6aef_infocdn.jpg",
            "https://cdn2.infocasas.com.uy/web/th.outside500x1.64d4de5abe1c2_infocdn.jpg",
            "https://cdn2.infocasas.com.uy/web/th.outside500x1.64d4de5bb5d1f_infocdn.jpg",
            "https://cdn2.infocasas.com.uy/web/th.outside500x1.64d4de5c9c0db_infocdn.jpg",
            "https://cdn2.infocasas.com.uy/web/th.outside500x1.64d4de5d7d5ba_infocdn.jpg",
            "https://cdn2.infocasas.com.uy/web/th.outside500x1.64d4de5e53822_infocdn.jpg",
            "https://cdn2.infocasas.com.uy/web/th.outside500x1.64d4de5eeca00_infocdn.jpg",
            "https://cdn2.infocasas.com.uy/web/th.outside500x1.64d4de5fa057f_infocdn.jpg",
            "https://cdn2.infocasas.com.uy/web/th.outside500x1.64d4de604e3e0_infocdn.jpg",
            "https://cdn2.infocasas.com.uy/web/th.outside500x1.64d4de61196a4_infocdn.jpg",
            "https://cdn2.infocasas.com.uy/web/th.outside500x1.64d4de61e1fdb_infocdn.jpg",
            "https://cdn2.infocasas.com.uy/web/th.outside500x1.64d4de628cf0e_infocdn.jpg",
            "https://cdn2.infocasas.com.uy/web/th.outside500x1.64d4de635f32d_infocdn.jpg",
            "https://cdn2.infocasas.com.uy/web/th.outside500x1.64d4de6420057_infocdn.jpg",
            "https://cdn2.infocasas.com.uy/web/th.outside500x1.64d4de64e6962_infocdn.jpg",
            "https://cdn2.infocasas.com.uy/web/th.outside500x1.64d4de6599067_infocdn.jpg",
            "https://cdn2.infocasas.com.uy/web/th.outside500x1.64d4de66386ca_infocdn.jpg",
            "https://cdn2.infocasas.com.uy/web/th.outside500x1.64d4de670247a_infocdn.jpg",
            "https://cdn2.infocasas.com.uy/web/th.outside500x1.64d4de67c7be9_infocdn.jpg",
            "https://cdn2.infocasas.com.uy/web/th.outside500x1.64d4de688e7f6_infocdn.jpg",
            "https://cdn2.infocasas.com.uy/web/th.outside500x1.64d4de6952e51_infocdn.jpg",
            "https://cdn2.infocasas.com.uy/web/th.outside500x1.64d4de6a2e40b_infocdn.jpg"
        ]
    },
]

renderizado.render(
  <>
    {infocasas.map(alquiler => (
      <App
        propertyArea={alquiler.TOTAL_AREA}
        propertyImage={alquiler.imagenes[1]}
        propertyBathrooms={alquiler.FULL_BATHROOMS}
        propertyBedrooms={alquiler.BEDROOMS}
        propertyType={alquiler.PROPERTY_TYPE}
        propertyCurrency={alquiler.exchange}
        propertyZone={alquiler.city_name}
        propertyPrice={alquiler.price}
        key={alquiler.id}
      />
    ))}
  </>
);

