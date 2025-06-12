// components/Summer.js
import { useState } from "react";

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
    <div className="summer-container">
      <h2>Академическая задолженность</h2>

      <table className="debt-table">
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
              <td colSpan={5} className="no-debts">
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
                <td className="checkbox-cell">
                  {debt.isSended ? (
                    <span className="sent">Отправлено</span>
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
        <div className="actions">
          <button
            className="btn-submit"
            onClick={() => setDialogOpen(true)}
            disabled={selectedDebts.length === 0}
          >
            Подать заявление на летний семестр
          </button>
        </div>
      )}

      {dialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-content">
            <h3>Заявление на летний семестр</h3>

            <div className="student-info">
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

            <p className="declaration">
              Прошу зарегистрировать меня на изучение дисциплин в летнем
              семестре
              {studentInfo.start_year}/{studentInfo.end_year} уч.года
            </p>

            <table className="selected-debts">
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

            <p className="signature">{studentInfo.dt}</p>

            <div className="dialog-actions">
              <button className="btn-confirm" onClick={handleSubmit}>
                Подтвердить
              </button>
              <button
                className="btn-cancel"
                onClick={() => setDialogOpen(false)}
              >
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .summer-container {
          margin: 20px;
        }

        h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #2c3e50;
        }

        .debt-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          margin: 25px 0;
          font-family: "Inter", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          border-radius: 16px;
          overflow: hidden;
          background: white;
          animation: fadeIn 0.4s ease-out;
          text-align: center;
          font-size: 15px;
          line-height: 1.6;
          color: #2d3748;
        }

        .debt-table th,
        .debt-table td {
          padding: 18px 24px;
          text-align: center;
          border: none;
          border-bottom: 1px solid #edf2f7;
          border-right: 1px solid #edf2f7;
          transition: all 0.3s ease;
          font-size: 15px;
          line-height: 1.6;
        }

        .debt-table th {
          background: linear-gradient(145deg, #f8f9fa, #ffffff);
          color: #1a365d;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.85em;
          letter-spacing: 1px;
          position: relative;
          padding: 20px 24px;
          text-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
        }

        .debt-table th:last-child,
        .debt-table td:last-child {
          border-right: none;
        }

        .debt-table th:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #4299e1, #667eea);
          opacity: 0.15;
        }

        .debt-table tbody tr {
          transition: all 0.3s ease;
        }

        .debt-table tbody tr:hover {
          background-color: #f7fafc;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .debt-table tbody tr:last-child td {
          border-bottom: none;
        }

        .no-debts {
          background: linear-gradient(145deg, #f8f9fa, #f1f3f5);
          color: #718096;
          font-style: italic;
          border-radius: 8px;
          font-size: 14px;
          letter-spacing: 0.2px;
        }

        .sent {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 8px;
          font-weight: 600;
          color: #28a745;
          background: rgba(40, 167, 69, 0.12);
          font-size: 14px;
          letter-spacing: 0.2px;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .checkbox-cell {
          text-align: center;
        }

        .actions {
          text-align: center;
          margin-top: 20px;
        }

        .btn-submit {
          padding: 12px 25px;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          transition: background 0.3s;
        }

        .btn-submit:hover {
          background: #2980b9;
        }

        .btn-submit:disabled {
          background: #bdc3c7;
          cursor: not-allowed;
        }

        .dialog-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .dialog-content {
          background: white;
          padding: 30px;
          border-radius: 8px;
          max-width: 800px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
        }

        .student-info {
          margin: 20px 0;
          line-height: 1.6;
        }

        .declaration {
          text-align: center;
          font-size: 18px;
          margin: 30px 0;
          font-weight: 500;
        }

        .selected-debts {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
        }

        .selected-debts th,
        .selected-debts td {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: center;
        }

        .signature {
          text-align: right;
          margin-top: 50px;
          font-style: italic;
        }

        .dialog-actions {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 30px;
        }

        .btn-confirm,
        .btn-cancel {
          padding: 12px 30px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 500;
        }

        .btn-confirm {
          background: #2ecc71;
          color: white;
        }

        .btn-confirm:hover {
          background: #27ae60;
        }

        .btn-cancel {
          background: #e74c3c;
          color: white;
        }

        .btn-cancel:hover {
          background: #c0392b;
        }
      `}</style>
    </div>
  );
};

export default Summer;
