# pip install PyGithub

from github import Github
import os

# token github desde variable de entorno
token = os.environ.get('TOKEN', None)

# chequear si no se agrega el token
if token is None:
    raise ValueError("GitHub token needed. ( TOKEN='yourtoken' python3 upload.py )")

g = Github(token)

# repositorio
nombre_repositorio = "cristian-encalada/Alquivago"

# obtener el repositorio
repo = g.get_repo(nombre_repositorio)
# rama
branch_name = "main"

# clave: ruta local , valor: ruta repositorio
json_files = {
    "/gallito.json": "data/gallito.json",
    "/infocasas.json": "data/infocasas.json",
}

# leer archivo json
for k, v in json_files.items():

    with open(k, 'r') as op:
        contenido = op.read()

    # ver archivo de github
    print(repo.get_contents(v, ref=branch_name))
    # print(repo.get_contents(v, ref=branch_name).decoded_content.decode('utf-8'))

    # subir el archivo a GitHub
    repo.create_file(
        path=v,
        message="updated JSON",
        content=contenido,
        branch=branch_name
    )
