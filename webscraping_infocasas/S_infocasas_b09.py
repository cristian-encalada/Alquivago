# este script corre sobre windows
# scraping infocasas

from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import json


website = "https://www.infocasas.com.uy"

# crear instancia del webdriver
driver = webdriver.Chrome()
driver.get(website)
driver.maximize_window()

time.sleep(5)

try:
    btnpopup = driver.find_element(By.XPATH, '//*[@id="bodyTag"]//div[3]/div/div[1]/button')
    btnpopup.click()
except Exception as e:
    pass

# ir a los alquileres del website
alquileres = driver.find_element(By.XPATH, '//div[@id="__next"]/div/header/nav/a[2]')
alquileres.click()

# limpiar filtros
limpiar_filtros = driver.find_element(By.CLASS_NAME, 'clean-filters')
limpiar_filtros.click()

#esperar que cargue pagina
time.sleep(4)

lst_data = []

# capturar en rango desde la pagina 0 hasta la que determine range()
for i in range(5):

    # avanzar de pagina
    if i == 1:
        primer_pag = driver.find_element(By.XPATH, '//div[@id="__next"]/div[3]/div/ul/li[2]/a')
        primer_pag.click()
        time.sleep(2)
    if i > 1:
        avanzar_pag = driver.find_element(By.XPATH, '//div[@id="__next"]/div[3]/div/ul/li[11]/a')
        avanzar_pag.click()
        time.sleep(2)

    # capturar articles de alquileres
    lst_article = driver.find_elements(By.XPATH, '//div[@id="__next"]/div[3]//div[1]/a[@class="lc-data"]')

    # guardar instancia de la pagina principal
    main_window = driver.window_handles[0]

    try:
        btnpopup = driver.find_element(By.XPATH, '//*[@id="bodyTag"]//div[3]/div/div[1]/button')
        btnpopup.click()
    except Exception as e:
        pass

    # creo una lista con los article de las urls para que no pierda la informacion al abrir un nuevo tab
    urls_alquiler = []
    for alquiler in lst_article:
        url_alquiler = alquiler.get_attribute('href')
        urls_alquiler.append(url_alquiler)

    for i, article in enumerate(lst_article):
        # abre una pestaña nueva
        article.click()
        time.sleep(1)

        # cambia el enfoque a la nueva pestaña
        new_window = driver.window_handles[-1]
        driver.switch_to.window(new_window)

        # para capturar informacion de pestaña abierta
        try:
            url_link = urls_alquiler[i]
        except Exception:
            url_link = ""
            pass
        try:
            id = "infocasas_{}".format(url_link.split("/")[-1])
        except Exception:
            id = ""
            pass
        try:  
            lst_precio = driver.find_elements(By.XPATH, '//div[@id="__next"]//span/strong')
            # obtener precio y convertir a flotante
            precio = lst_precio[0].text.split(" ")[-1]
            precio_float = float(precio.replace(".", ""))
            # obtener tipo de moneda
            moneda = lst_precio[0].text.split(" ")[0]
        except Exception:
            lst_precio = []
            precio = 0
            moneda = ""
            pass
        try:           
            departamento = driver.find_element(By.CLASS_NAME, 'property-location-tag')
            departamento_split = departamento.text.split(", ")
        except Exception:
            departamento_split = []
            pass
        try:
            lst_info_zona = driver.find_elements(By.XPATH, '//div[@id="__next"]//div[3]/div/strong')
        except Exception:
            lst_info_zona = []
            pass
        try:
            lst_info = driver.find_elements(By.XPATH, '//div[@id="__next"]//div[1]//div[2]/span')
        except Exception:
            lst_info = []
            pass
        try:
            banos = str(lst_info[1].text)
        except Exception:
            banos = ""
            pass
        try:
            area = str(lst_info[2].text)
        except Exception:
            area = ""
            pass
        try:
            cuartos = str(lst_info[0].text)
        except Exception:
            cuartos = ""
            pass
        try:
            # abrir galeria
            time.sleep(1)
            btn_galeria_abrir = driver.find_element(By.XPATH, '//div[@id="__next"]//div[3]/div/div/button[1]')
            btn_galeria_abrir.click()
            time.sleep(1)
            # capturar informacion de galeria de imagenes
            lst_imgs = driver.find_elements(By.XPATH, '//div[@class="pmp-image"]//img')
            img_urls = [img.get_attribute("src") for img in lst_imgs]
        except Exception:
            img_urls = ""
            pass
        try:
            # ir a street view
            time.sleep(1)
            div_street_view = driver.find_element(By.XPATH, '//div[text()="Street View"]')
            div_street_view.click()
            time.sleep(2)
            # capturar url de mapa
            url_google_map = driver.find_element(By.XPATH, '//div[@id="rc-tabs-2-panel-streetView"]//div[1]/div[2]/a')
            url_map = url_google_map.get_attribute('href')
            # capturar latitud y longitud
            parts = url_map.split(',')
            lat = parts[0].split("@")[1]
            lon = parts[1]
        except Exception:
            url_map = ""
            lat = 0
            lon = 0
            pass
        try:
            # cerrar galeria
            btn_galeria_cerrar = driver.find_element(By.CLASS_NAME, 'ant-modal-close')
            btn_galeria_cerrar.click()
        except Exception:
            pass

        # guardar informacion en diccionario
        try:
            dic_alquiler = {
                "id": id,
                "url_link": url_link,
                "price": precio_float,
                "exchange": str(moneda),
                "state_name": str(departamento_split[-1]),
                "city_name": str(lst_info_zona[2].text),
                "PROPERTY_TYPE": str(lst_info_zona[1].text),
                "TOTAL_AREA": area,
                "FULL_BATHROOMS": banos,
                "BEDROOMS": cuartos,
                "location": {
                    "latitude": float(lat),
                    "longitude": float(lon)
                    },
                "imagenes": img_urls
                }
            lst_data.append(dic_alquiler)
        except Exception:
            pass

        # cerrar pestaña abierta y volver a la principal
        driver.close()
        driver.switch_to.window(main_window)

#---------------------------------------------------------------
#---------------------------------------------------------------

# exportar JSON
json_data = json.dumps(lst_data, indent=4, ensure_ascii=False)
with open('infocasas.json', 'w', encoding='utf-8') as json_file:
    json_file.write(json_data)

# input("Enter para salir..")

# cerrar driver
driver.quit()