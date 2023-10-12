import subprocess
from datetime import timedelta
from airflow import DAG
from airflow.operators.python import PythonOperator
from airflow.utils.dates import days_ago
import logging


default_args = {
    'owner': 'airflow',
    'depends_on_past': False,
    'email': ['martinleiro9@gmail.com'],
    'email_on_failure': True,
    'email_on_retry': False,
    'retries': 1,
    'retry_delay': timedelta(minutes=2),
}

def scraping_gallito():
    logging.info('performing gallito')
    subprocess.run(['python3', 'root/Alquivago/webscraping/webscraping_gallito/S_gallito_d00.py'])

def scraping_infocasas():
    logging.info('performing infocasas')
    subprocess.run(['python3', 'root/Alquivago/webscraping/webscraping_infocasas/S_infocasas_d03.py'])

def extract_data_mercadolibre():
    loggin.info('perfrming mercadolibre')
    subprocess.run(['python3', 'root/Alquivago/api_mercadolibre/extract_data.py'])

with DAG(
    'alquivago',
    default_args=default_args,
    description='DAG_scraping',
    schedule_interval=timedelta(hours=4), # hora
    # schedule_interval=timedelta(minutes=30), # minutos
    start_date=days_ago(1),
    tags=['scraping']
) as dag:
    scraping_gallito_task = PythonOperator(task_id="S_gallito", python_callable=scraping_gallito)
    scraping_infocasas_task = PythonOperator(task_id="S_infocasas", python_callable=scraping_infocasas)

    scraping_infocasas_task >> scraping_gallito_task >> extract_data_mercadolibre_task
