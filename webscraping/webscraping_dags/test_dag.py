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
    'dag_infocasas_and_gallito',
    default_args=default_args,
    description='Scraping infocasas and gallito',
    schedule_interval=timedelta(hours=2), # Change the schedule interval as needed
    start_date=datetime(2023, 10, 12),
    tags=['infocasas', 'gallito']
) as dag:
    scraping_infocasas_task = PythonOperator(task_id="S_infocasas", python_callable=scraping_infocasas)
    scraping_gallito_task = PythonOperator(task_id="S_gallito", python_callable=scraping_gallito)


scraping_infocasas_task >> scraping_gallito_task
