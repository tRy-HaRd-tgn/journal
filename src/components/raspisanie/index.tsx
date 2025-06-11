// components/Rasp.js
import "./styles.css";

const Rasp = () => {
  // Захардкоженные данные расписания
  const data = {
    rasps: [
      {
        den_short_ru: "Пн",
        urok_nomer: 1,
        urok_vremya: "9:00-10:30",
        disciplina_name: "Математика",
        haracter_rup_ru: "Лекция",
        sotrudnik_fio: "Иванов И.И.",
        aud_name: "Ауд. 301",
        ssylka_vks: "https://meet.example.com/math",
        login_password_vks: "math123",
      },
      {
        den_short_ru: "Пн",
        urok_nomer: 2,
        urok_vremya: "10:40-12:10",
        disciplina_name: "Физика",
        haracter_rup_ru: "Практика",
        sotrudnik_fio: "Петров П.П.",
        aud_name: "Ауд. 215",
        ssylka_vks: "https://meet.example.com/physics",
        login_password_vks: "physics456",
      },
      {
        den_short_ru: "Вт",
        urok_nomer: 1,
        urok_vremya: "9:00-10:30",
        disciplina_name: "Программирование",
        haracter_rup_ru: "Лабораторная",
        sotrudnik_fio: "Сидоров С.С.",
        aud_name: "Комп. кл. 101",
        ssylka_vks: "https://meet.example.com/programming",
        login_password_vks: "prog789",
      },
    ],
    nedelya_info: {
      nedelya_name: " (четная неделя)",
      rasp_nedelya_nomer: 4,
    },
  };

  return (
    <div className="rasp-container">
      <h3 className="rasp-title">
        Текущая неделя: {data.nedelya_info.rasp_nedelya_nomer}
        {data.nedelya_info.nedelya_name}
      </h3>

      <div className="table-container">
        <table className="rasp-table">
          <thead>
            <tr>
              <th>№</th>
              <th>День</th>
              <th>Занятие</th>
              <th>Время</th>
              <th>Наименование дисциплины</th>
              <th>Вид занятия</th>
              <th>Фио преподавателя</th>
              <th>Аудитория</th>
              <th>Ссылка ВКС</th>
              <th>Логин/пароль ВКС</th>
            </tr>
          </thead>
          <tbody>
            {data.rasps.map((rasp, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{rasp.den_short_ru}</td>
                <td>{rasp.urok_nomer}</td>
                <td>{rasp.urok_vremya}</td>
                <td>{rasp.disciplina_name}</td>
                <td>{rasp.haracter_rup_ru}</td>
                <td>{rasp.sotrudnik_fio}</td>
                <td>{rasp.aud_name}</td>
                <td>
                  <a
                    href={rasp.ssylka_vks}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {rasp.ssylka_vks}
                  </a>
                </td>
                <td>{rasp.login_password_vks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Rasp;
