// components/Rasp.js
import "./styles.css";
import React, { useState } from "react";

interface RaspItem {
  den_short_ru: string;
  urok_nomer: number;
  urok_vremya: string;
  disciplina_name: string;
  haracter_rup_ru: string;
  sotrudnik_fio: string;
  aud_name: string;
  ssylka_vks: string;
  login_password_vks: string;
}

interface NedelyaInfo {
  nedelya_name: string;
  rasp_nedelya_nomer: number;
}

interface RaspWeek {
  rasps: RaspItem[];
  nedelya_info: NedelyaInfo;
}

const subjects = [
  "Математика",
  "Физика",
  "Программирование",
  "История",
  "Литература",
  "Биология",
  "Химия",
  "География",
  "Английский язык",
  "Философия",
  "Экономика",
  "Право",
  "Информатика",
  "Физкультура",
  "Музыка",
  "Технология",
  "Обществознание",
  "Черчение",
  "Астрономия",
  "Экология",
];
const teachers = [
  "Иванов И.И.",
  "Петров П.П.",
  "Сидоров С.С.",
  "Кузнецов К.К.",
  "Смирнов С.С.",
  "Васильев В.В.",
  "Морозов М.М.",
  "Волков В.В.",
  "Зайцев З.З.",
  "Соловьев С.С.",
  "Павлов П.П.",
  "Семенов С.С.",
  "Голубев Г.Г.",
  "Виноградов В.В.",
  "Богданов Б.Б.",
  "Федоров Ф.Ф.",
  "Михайлов М.М.",
  "Беляев Б.Б.",
  "Тарасов Т.Т.",
  "Белов Б.Б.",
];
const types = ["Лекция", "Практика", "Лабораторная"];

const raspData: Record<number, RaspWeek> = {};
for (let i = 1; i <= 20; i++) {
  raspData[i] = {
    rasps: [
      {
        den_short_ru: ["Пн", "Вт", "Ср", "Чт", "Пт"][i % 5],
        urok_nomer: 1,
        urok_vremya: "9:00-10:30",
        disciplina_name: subjects[(i - 1) % subjects.length],
        haracter_rup_ru: types[i % types.length],
        sotrudnik_fio: teachers[(i - 1) % teachers.length],
        aud_name: `Ауд. ${100 + i}`,
        ssylka_vks: `https://meet.example.com/week${i}`,
        login_password_vks: `pass${i}week`,
      },
    ],
    nedelya_info: {
      nedelya_name: ` (неделя ${i})`,
      rasp_nedelya_nomer: i,
    },
  };
}

const Rasp: React.FC = () => {
  // Состояние для выбранной недели
  const [selectedWeek, setSelectedWeek] = useState<number>(1);
  const data = raspData[selectedWeek];
  // Состояния раскрытия строк для мобильной версии
  const [openRows, setOpenRows] = useState<Record<number, boolean>>({});

  // Проверка: мобильное устройство (по ширине экрана)
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const handleRowClick = (index: number) => {
    setOpenRows((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="rasp-container">
      <h3 className="rasp-title">
        Текущая неделя: {data.nedelya_info.rasp_nedelya_nomer}
        {data.nedelya_info.nedelya_name}
      </h3>
      <div style={{ marginBottom: 16 }}>
        <label htmlFor="week-select">Выберите неделю: </label>
        <select
          id="week-select"
          className="week-select"
          value={selectedWeek}
          onChange={(e) => setSelectedWeek(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1} неделя
            </option>
          ))}
        </select>
      </div>
      <div className="table-container">
        <table className="rasp-table">
          <thead>
            <tr>
              <th>№</th>
              <th>День</th>
              <th>Время</th>
              <th>Наименование дисциплины</th>
              {!isMobile && (
                <>
                  <th>Занятие</th>
                  <th>Вид занятия</th>
                  <th>Фио преподавателя</th>
                  <th>Аудитория</th>
                  <th>Ссылка ВКС</th>
                  <th>Логин/пароль ВКС</th>
                </>
              )}
              {isMobile && <th></th>}
            </tr>
          </thead>
          <tbody>
            {data.rasps.length === 0 ? (
              <tr>
                <td colSpan={isMobile ? 5 : 10} style={{ textAlign: "center" }}>
                  Нет данных для выбранной недели
                </td>
              </tr>
            ) : (
              data.rasps.map((rasp: RaspItem, index: number) => (
                <React.Fragment key={index}>
                  <tr
                    className={isMobile ? "mobile-row" : ""}
                    onClick={isMobile ? () => handleRowClick(index) : undefined}
                    style={
                      isMobile
                        ? { cursor: "pointer", position: "relative" }
                        : {}
                    }
                  >
                    {isMobile && (
                      <span
                        className={`arrow${openRows[index] ? " open" : ""}`}
                        style={{
                          position: "absolute",
                          top: 8,
                          right: 12,
                          zIndex: 2,
                          fontSize: 18,
                        }}
                      >
                        ▶
                      </span>
                    )}
                    <td data-label="№" className="mobile-only">
                      {index + 1}
                    </td>
                    <td data-label="День">{rasp.den_short_ru}</td>
                    <td data-label="Время">{rasp.urok_vremya}</td>
                    <td
                      data-label="Наименование дисциплины"
                      colSpan={isMobile ? 2 : undefined}
                      style={isMobile ? { paddingRight: 12 } : {}}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {rasp.disciplina_name}
                      </div>
                    </td>
                    {!isMobile && (
                      <>
                        <td data-label="Занятие">{rasp.urok_nomer}</td>
                        <td data-label="Вид занятия">{rasp.haracter_rup_ru}</td>
                        <td data-label="Фио преподавателя">
                          {rasp.sotrudnik_fio}
                        </td>
                        <td data-label="Аудитория">{rasp.aud_name}</td>
                        <td data-label="Ссылка ВКС">
                          <a
                            href={rasp.ssylka_vks}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {rasp.ssylka_vks}
                          </a>
                        </td>
                        <td data-label="Логин/пароль ВКС">
                          {rasp.login_password_vks}
                        </td>
                      </>
                    )}
                  </tr>
                  {isMobile && openRows[index] && (
                    <tr className="mobile-details">
                      <td colSpan={5}>
                        <div>
                          <b>Занятие:</b> {rasp.urok_nomer}
                        </div>
                        <div>
                          <b>Вид занятия:</b> {rasp.haracter_rup_ru}
                        </div>
                        <div>
                          <b>Фио преподавателя:</b> {rasp.sotrudnik_fio}
                        </div>
                        <div>
                          <b>Аудитория:</b> {rasp.aud_name}
                        </div>
                        <div>
                          <b>Ссылка ВКС:</b>{" "}
                          <a
                            href={rasp.ssylka_vks}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {rasp.ssylka_vks}
                          </a>
                        </div>
                        <div>
                          <b>Логин/пароль ВКС:</b> {rasp.login_password_vks}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Rasp;
