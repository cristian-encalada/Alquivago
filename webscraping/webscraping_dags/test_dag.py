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
    logging.info('performing scraping')
    subprocess.run(['python3', 'root/Alquivago/webscraping/webscraping_gallito/S_gallito_d00.py'])

def scraping_infocasas():
    logging.info('performing scraping')
    subprocess.run(['python3', 'root/Alquivago/webscraping/webscraping_infocasas/S_infocasas_d03.py'])

with DAG(
    'Scraping',
    default_args=default_args,
    description='DAG_scraping',
    schedule_interval=timedelta(hours=1),  # hora
    # schedule_interval=timedelta(minutes=60),  # minutos
    start_date=days_ago(2),
    tags=['scraping']
) as dag:
    scraping_gallito_task = PythonOperator(task_id="S_gallito", python_callable=scraping_gallito)
    scraping_infocasas_task = PythonOperator(task_id="S_infocasas", python_callable=scraping_infocasas)

    scraping_gallito_task >> scraping_infocasas_task