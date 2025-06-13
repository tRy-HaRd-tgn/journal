// components/Iup.js
import styles from "./styles.module.css";

const Iup = () => {
  // Захардкоженные данные ИТП
  const iupData = {
    shapka: {
      shapka1: "Индивидуальный учебный план",
      shapka2: "Утверждаю",
      shapka3: "Ректор университета",
      shapka4: "Иванов П.С.",
      shapka5: "Декан факультета",
    },
    tb: [
      {
        nomer: "1",
        disciplina_id: "MATH101",
        disciplina_name: "Высшая математика",
        kredit: "5",
      },
      {
        nomer: "2",
        disciplina_id: "PHYS201",
        disciplina_name: "Физика",
        kredit: "4",
      },
      {
        nomer: "3",
        disciplina_id: "PROG301",
        disciplina_name: "Программирование",
        kredit: "6",
      },
      {
        nomer: "4",
        disciplina_id: "ENG401",
        disciplina_name: "Английский язык",
        kredit: "3",
      },
    ],
    tb_gr: [
      { period_nomer: "1 семестр", period_data: "01.09.2023 - 31.12.2023" },
      { period_nomer: "2 семестр", period_data: "01.02.2024 - 30.06.2024" },
    ],
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 cont">
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start mb-4 sm:mb-6">
          <div className="flex-1 mb-4 sm:mb-0">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
              {iupData.shapka.shapka1}
            </h3>
          </div>
          <div className="w-full sm:w-32 h-24 sm:h-32 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500">
            QR-код
          </div>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            {iupData.shapka.shapka2}
          </h3>
          <h3 className="text-lg text-gray-700">{iupData.shapka.shapka3}</h3>
          <h3 className="text-lg text-gray-700 mt-2">
            {iupData.shapka.shapka4}
          </h3>
        </div>
      </div>

      <div className="mb-6 sm:mb-8">
        <div className={styles.tableContainer}>
          <div className={styles.tableWrapper}>
            <table className={styles.journalTable}>
              <thead className={styles.tableHeader}>
                <tr>
                  <th>№</th>
                  <th>Код дисциплины</th>
                  <th>Наименование дисциплины</th>
                  <th>Кредиты</th>
                </tr>
              </thead>
              <tbody className={styles.tableBody}>
                {iupData.tb.map((item, index) => (
                  <tr key={index}>
                    <td data-label="№">{item.nomer}</td>
                    <td data-label="Код дисциплины">{item.disciplina_id}</td>
                    <td data-label="Наименование дисциплины">
                      {item.disciplina_name}
                    </td>
                    <td data-label="Кредиты">{item.kredit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 sm:mb-0">
          {iupData.shapka.shapka5}
        </h3>
        <div className="w-full sm:w-32 h-24 sm:h-32 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500">
          QR-код
        </div>
      </div>

      <div className="mb-6 sm:mb-8">
        <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
          График учебного процесса
        </h4>
        <div className={styles.tableContainer}>
          <div className={styles.tableWrapper}>
            <table className={styles.journalTable}>
              <thead className={styles.tableHeader}>
                <tr>
                  <th>Период</th>
                  <th>Даты</th>
                </tr>
              </thead>
              <tbody className={styles.tableBody}>
                {iupData.tb_gr.map((item, index) => (
                  <tr key={index}>
                    <td data-label="Период">{item.period_nomer}</td>
                    <td data-label="Даты">{item.period_data}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iup;
