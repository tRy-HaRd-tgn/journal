// components/Summer.js
import { useState } from "react";
import styles from "./styles.module.css";

const Summer = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  // Захардкоженные данные о задолженностях
  const debts = [
    {
      id: 1,
      disciplina_name: "Высшая математика",
      ssharacter_rup_student_kredit: 5,
      period_nomer: 2,
      is_pre: true,
      isSended: false,
    },
    {
      id: 2,
      disciplina_name: "Физика",
      ssharacter_rup_student_kredit: 4,
      period_nomer: 3,
      is_pre: false,
      isSended: true,
    },
    {
      id: 3,
      disciplina_name: "Иностранный язык",
      ssharacter_rup_student_kredit: 3,
      period_nomer: 1,
      is_pre: false,
      isSended: false,
    },
  ];

  const studentInfo = {
    student_fio: "Иванов Иван Иванович",
    gruppa_ru: "CS-101",
    shablon_kontingent_ru: "Очная форма",
    fac_name: "Факультет компьютерных наук",
    otdelenie_ru: "Русский",
    start_year: 2023,
    end_year: 2024,
    dt: "15 мая 2024 г.",
  };

  const [selectedDebts, setSelectedDebts] = useState<number[]>([]);

  const toggleDebtSelection = (id: number) => {
    if (selectedDebts.includes(id)) {
      setSelectedDebts(selectedDebts.filter((debtId) => debtId !== id));
    } else {
      setSelectedDebts([...selectedDebts, id]);
    }
  };

  const handleSubmit = () => {
    alert("Заявление на летний семестр успешно подано!");
    setDialogOpen(false);
    setSelectedDebts([]);
  };

  return (
    <div className={styles.summerContainer}>
      <h2 className={styles.title}>Академическая задолженность</h2>

      <table className={styles.debtTable}>
        <thead>
          <tr>
            <th>№</th>
            <th>Дисциплина</th>
            <th>Кредиты</th>
            <th>Семестр</th>
            <th>Выбор на летний семестр</th>
          </tr>
        </thead>
        <tbody>
          {debts.length === 0 ? (
            <tr>
              <td colSpan={5} className={styles.noDebts}>
                У вас нет академической задолженности
              </td>
            </tr>
          ) : (
            debts.map((debt, index) => (
              <tr key={debt.id}>
                <td>{index + 1}</td>
                <td style={{ color: debt.is_pre ? "red" : "inherit" }}>
                  {debt.disciplina_name}
                  {debt.is_pre && " (ПРЕРЕКВЕЗИТ)"}
                </td>
                <td>{debt.ssharacter_rup_student_kredit}</td>
                <td>{debt.period_nomer}</td>
                <td className={styles.checkboxCell}>
                  {debt.isSended ? (
                    <span className={styles.sent}>Отправлено</span>
                  ) : (
                    <input
                      type="checkbox"
                      checked={selectedDebts.includes(debt.id)}
                      onChange={() => toggleDebtSelection(debt.id)}
                    />
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {debts.length > 0 && !debts.every((d) => d.isSended) && (
        <div className={styles.actions}>
          <button
            className={styles.btnSubmit}
            onClick={() => setDialogOpen(true)}
            disabled={selectedDebts.length === 0}
          >
            Подать заявление на летний семестр
          </button>
        </div>
      )}

      {dialogOpen && (
        <div className={styles.dialogOverlay}>
          <div className={styles.dialogContent}>
            <h3>Заявление на летний семестр</h3>

            <div className={styles.studentInfo}>
              <p>
                <strong>ФИО:</strong> {studentInfo.student_fio}
              </p>
              <p>
                <strong>Группа:</strong> {studentInfo.gruppa_ru}
              </p>
              <p>
                <strong>Форма обучения:</strong>{" "}
                {studentInfo.shablon_kontingent_ru}
              </p>
              <p>
                <strong>Факультет:</strong> {studentInfo.fac_name}
              </p>
              <p>
                <strong>Язык обучения:</strong> {studentInfo.otdelenie_ru}
              </p>
            </div>

            <p className={styles.declaration}>
              Прошу зарегистрировать меня на изучение дисциплин в летнем
              семестре
              {studentInfo.start_year}/{studentInfo.end_year} уч.года
            </p>

            <table className={styles.selectedDebts}>
              <thead>
                <tr>
                  <th>№</th>
                  <th>Дисциплина</th>
                  <th>Кредиты</th>
                  <th>Семестр</th>
                </tr>
              </thead>
              <tbody>
                {debts
                  .filter((debt) => selectedDebts.includes(debt.id))
                  .map((debt, index) => (
                    <tr key={debt.id}>
                      <td>{index + 1}</td>
                      <td>{debt.disciplina_name}</td>
                      <td>{debt.ssharacter_rup_student_kredit}</td>
                      <td>{debt.period_nomer}</td>
                    </tr>
                  ))}
              </tbody>
            </table>

            <p className={styles.signature}>{studentInfo.dt}</p>

            <div className={styles.dialogActions}>
              <button className={styles.btnConfirm} onClick={handleSubmit}>
                Подтвердить
              </button>
              <button
                className={styles.btnCancel}
                onClick={() => setDialogOpen(false)}
              >
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Summer;
