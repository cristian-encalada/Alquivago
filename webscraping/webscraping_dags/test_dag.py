import subprocess
from datetime import datetime
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
    'retries': 0,
    'catchup': False
}

def scraping_infocasas():
    logging.info('performing infocasas')
    subprocess.run(['python3', 'root/Alquivago/webscraping/webscraping_infocasas/S_infocasas_d04.py'])

def scraping_gallito():
    logging.info('performing gallito')
    subprocess.run(['python3', 'root/Alquivago/webscraping/webscraping_gallito/S_gallito_d02.py'])

with DAG(
    'dag_scraping',
    default_args=default_args,
    description='alquivago scraping',
    schedule_interval=timedelta(hours=6), # hora
    start_date=datetime(2023, 10, 12),
    tags=['scraping']
) as dag:
    scraping_infocasas_task = PythonOperator(task_id="S_infocasas", python_callable=scraping_infocasas)
    scraping_gallito_task = PythonOperator(task_id="S_gallito", python_callable=scraping_gallito)

    scraping_infocasas_task >> scraping_gallito_task
