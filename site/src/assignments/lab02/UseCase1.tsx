import type { CountStudentsByCareerResponse } from '@types';
import { useApi } from './hooks/useApi';

function UseCase1() {

  const { response } = useApi<CountStudentsByCareerResponse>('/careers/count/');

  const records = response?.data;

  return (
    <section>
      <h3>Requisito #1</h3>
      <p>
        Listar número de alumnos por cada Carrera Profesional
      </p>
      <table id="records-list">
        <thead>
          <tr>
            <th className="record-info-career">Carrera profesional</th>
            <th className="record-info-count">Alumnos</th>
          </tr>
        </thead>
        <tbody>
        {
          records && records.length > 0 && records.map((record) => (
            <tr key={record.career.id}>
              <td className="record-info-career">
                <h4>{record.career.name}</h4>
                <p>{record.career.observations}</p>
              </td>
              <td className="record-info-count">{record.count}&nbsp;&nbsp;&nbsp;</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </section>
  );
}

export default UseCase1;
