from datetime import datetime
import json
from random import randint, choice
import sys

option = sys.argv[1] if len(sys.argv) > 1 else None

if option == 'carreras':
    content = open('carreras_pregrado.json', 'r').read()
    data: list[dict] = json.loads(content)

    sql = """INSERT INTO TCarreraProfesional(nomCP, Fecha_creacion, observaciones) VALUES\n"""

    for carrera in data:
        random_date = datetime(randint(1600, 2021), randint(1, 12), randint(1, 28)).date()
        random_date_str = random_date.strftime('%Y-%m-%d')
        sql += f"('{carrera['nombre']}', '{random_date_str}', '{carrera['descripcion']}'),\n"

    sql = sql[:-2] + ';'

    print(sql)

elif option == 'alumnos':
    n = 100_000
    fisi_2022 = open('fisi_2022.json', 'r').read()

    sql = """INSERT INTO TAlumno(Codigo_alumno, AP, Nom, edad, sexo, peso, talla, color, prov, cod_cp, fecha_ingreso_U) VALUES\n"""

    fisi_data: list[dict] = json.loads(fisi_2022)
    rows = []

    last_code = 0
    def get_next_code():
        global last_code
        last_code += 1
        return str(last_code).zfill(7)

    def random_code():
        rand_start = randint(2000, 2999).__str__()[2:]
        return f'{rand_start}{get_next_code()}'

    random_names = open('random_names.txt', 'r').read().split('\n')
    colors = ['Rojo', 'Verde', 'Azul', 'Amarillo', 'Negro', 'Morado', 'Violeta', 'Verde claro', 'Gris', 'Beige']
    provinces = open('provincias.txt', 'r').read().split('\n')

    for i in range(n):
        code = random_code()
        edad = randint(16, 40)
        gender = 'M' if randint(0, 1) == 0 else 'F'
        weight = randint(40, 100) + randint(0, 9) / 10
        height = randint(140, 200)
        fav_color = choice(colors)
        prov = choice(provinces)
        cp_fk = randint(1, 100)
        fecha_ingreso = datetime(randint(2000, 2024), randint(1, 12), randint(1, 28)).date().strftime('%Y-%m-%d')

        if fisi_data:
            fisi_student = fisi_data.pop()
            nom = fisi_student['nombre'].split(',')[0].strip()
            ap = fisi_student['nombre'].split(',')[1].strip()
        else:
            nom = choice(random_names)
            ap = choice(random_names)

        sql += f"('{code}', '{ap}', '{nom}', {edad}, '{gender}', {weight}, {height}, '{fav_color}', '{prov}', {cp_fk}, '{fecha_ingreso}'),\n"

    sql = sql[:-2] + ';'

    print(sql)

else:
    print('usage: python data_generation.py [carreras | alumnos]')
