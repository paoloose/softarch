import type { CareersResponse, StudentsByCareerResponse } from '@types';
import { useApi } from './hooks/useApi';
import { Dropdown } from './Dropdown';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const colorsMap = {
  'Rojo': "#D46A6A",
  'Verde': "#6BAA75",
  'Azul': "#6B8ED4",
  'Amarillo': "#F7E28D",
  'Negro': "#333333",
  'Morado': "#9A74A7",
  'Violeta': "#CBA4D4",
  'Verde claro': "#B2D8B2",
  'Gris': "#B1B1B1",
  'Beige': "#EDE0C8",
} as const;

function UseCase2() {
  const [minAge, setMinAge] = useState(18);
  const [maxAge, setMaxAge] = useState(25);
  const [startDate, setStartDate] = useState<Date>(new Date(2021, 0, 1));
  const [selectedColor, setSelectedColor] = useState<keyof typeof colorsMap>('Rojo');

  const { response: careersResponse, isLoading: careersLoading, error: careersError } = useApi<CareersResponse>('/careers/');
  const min_age = minAge;
  const max_age = maxAge;
  const start_date = new Intl.DateTimeFormat('en-CA').format(startDate);
  const exclude_fav_color = selectedColor;

  const padding = useRef('');
  const url = useRef(`/students/bycareer/?min_age=${min_age}&max_age=${max_age}&start_date=${start_date}&exclude_fav_color=${exclude_fav_color}`);
  const { response: studentsResponse, isLoading: studentsLoading, error: studentsError } = useApi<StudentsByCareerResponse>(url.current, {}, {
    keepPreviousData: true,
  });

  useLayoutEffect(() => {
    url.current = `/students/bycareer/?min_age=${min_age}&max_age=${max_age}&start_date=${start_date}&exclude_fav_color=${exclude_fav_color}${padding.current}`;
    padding.current = `${padding.current} `;
    setMinAge(minAge)
  }, [minAge, maxAge, startDate, selectedColor]);

  let loading = false;
  if (careersLoading || studentsLoading) {
    loading = true;
  }

  if (careersError || studentsError) {
    console.error(careersError || studentsError);
    return <p>Ha ocurrido un error</p>;
  }

  const careers = careersResponse?.data;
  const studentsByCareerId = studentsResponse?.data;

  if (!careers || !studentsByCareerId) {
    return <p>Cargando...</p>;
  }

  return (
    <section>
      <h3>Requisito #2</h3>
      <p>
        Listar alumnos por carrera profesional cuyos alumnos que
        ingresaron después del <span><DatePicker selected={startDate} onChange={(date) => setStartDate(date!)} /></span> y que color favorito no sea&nbsp;
        <span>
          <select value={selectedColor} onChange={(event) => setSelectedColor(event.target.value as keyof typeof colorsMap)}>
            {Object.keys(colorsMap).map((color) => (
              <option key={color} value={color}>{color}</option>
            ))}
          </select>
        </span> y cuya edad esté entre&nbsp;
        <span>
          <input type="number" style={{ maxWidth: 45 }} value={minAge} onChange={(event) => setMinAge(Number(event.target.value))} />
        </span> y&nbsp;
        <span>
          <input type="number" style={{ maxWidth: 45 }} value={maxAge} onChange={(event) => setMaxAge(Number(event.target.value))} />
        </span> años.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, filter: loading ? 'brightness(80%)' : 'none' }}>
        {
          Object.entries(studentsByCareerId).map(([careerId, students]) => {
            const career = careers.find((career) => career.id === Number(careerId))!;
            return (
              <Dropdown key={careerId}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#eeeeee',
                    color: 'black',
                  }}
                >
                  <span>{career.name}</span>
                  {
                    !loading && <span style={{ fontSize: 15 }}>{students.length} estudiantes</span>
                  }
                </div>
                <div>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                  }}>
                    {students.map((student) => (
                      <li
                        key={student.studentCode}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'start',
                          padding: 12,
                          backgroundColor: '#f5f5f5',
                          color: 'black',
                          borderBottom: '1px solid #e0e0e0',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: 16, width: '100%' }}>
                          &nbsp;
                          <span style={{
                            border: '1px solid #000',
                            borderRadius: '10%',
                            backgroundColor: colorsMap[student.favoriteColor as keyof typeof colorsMap],
                            display: 'inline-block',
                            width: 16,
                            height: 16,
                          }}></span>
                          &nbsp;<div style={{ display: 'flex', alignContent: 'space-between', justifyContent: 'space-between', width: '100%' }}>
                            <span style={{fontWeight: 'bold'}}>{student.surname}, {student.name} ({student.gender})</span>
                            <span>{student.studentCode}</span>
                          </div>
                        </div>
                        <div style={{ paddingLeft: 22 }}>Se unió el {student.enrollDate}</div>
                        <div style={{ paddingLeft: 22 }}>{student.province}</div>
                        <div style={{ paddingLeft: 22 }}>{student.age} años, {student.height.toPrecision(4)} cm, {student.weight.toPrecision(4)} kg</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Dropdown>
            );
          }
        )
        }
      </div>
    </section>
  );
}

export default UseCase2;
