from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
import time
import json

website = "https://www.gallito.com.uy/"

driver = webdriver.Chrome()
driver.get(website)
driver.maximize_window()

alquileres = driver.find_element(By.XPATH, '//*[@id="inmuebles"]/ul/li[1]/a')
alquileres.click()

first_rent = driver.find_element(By.XPATH, f'//*[@id="grillaavisos"]/div[2]/section/article/div[2]/img')
first_rent.click()

ubi = driver.find_element(By.XPATH, '//*[@id="ulNavGaleria"]/li[4]/a').click()
coords = WebDriverWait(driver, 4).until(EC.presence_of_element_located((By.XPATH, '//*[@id="iframeMapa"]')))
print(coords)
print(coords.get_attribute('src'))