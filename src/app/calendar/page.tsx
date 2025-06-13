"use client";
import { menuItems } from "./data";
import { useState } from "react";
import { CurrentControl } from "@/components/currentControl";
import Rating1 from "@/components/rating1";
import { SystemComponent } from "@/components/systemComponent";
import Summer from "@/components/summer";
import Rasp from "@/components/raspisanie";
import Itog from "@/components/itog";
import Reg from "@/components/register";
import Rating2 from "@/components/rating2";
import Iup from "@/components/iup";
import RaspEkzamen from "@/components/raspExam";
export default function Page() {
  const [state, setState] = useState("");

  return (
    <div className="bg-gray-50 font-sans">
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-8 max-w-6xl">
        <header className="mb-4 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-indigo-800">
            Журнал успеваемости
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center mt-2 text-gray-600 text-sm sm:text-base">
            <div className="flex items-center mb-2 sm:mb-0">
              <span className="material-icons mr-1">school</span>
              <span>2024-2025 учебный год</span>
            </div>
            <span className="hidden sm:inline mx-2">|</span>
            <div className="flex items-center">
              <span className="font-medium">Георгий Иванович</span>
              <span className="ml-1 px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                41
              </span>
            </div>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-md p-3 sm:p-6 mb-4 sm:mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Группа
              </label>
              <div className="relative">
                <select className="block w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none bg-white">
                  <option>Выберите группу</option>
                  <option>Группа 1</option>
                  <option>Группа 2</option>
                </select>
                <span className="absolute right-3 top-2.5 material-icons text-gray-400">
                  expand_more
                </span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Семестр
              </label>
              <div className="relative">
                <select className="block w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none bg-white">
                  <option>Выберите семестр</option>
                  <option>1 семестр</option>
                  <option>2 семестр</option>
                </select>
                <span className="absolute right-3 top-2.5 material-icons text-gray-400">
                  expand_more
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 sm:mb-6 space-y-2 sm:space-y-3">
          <div className="flex items-start p-3 sm:p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
            <span className="material-icons text-yellow-500 mr-2 sm:mr-3">
              warning
            </span>
            <div>
              <p className="font-medium text-yellow-800 text-sm sm:text-base">
                Внимание
              </p>
              <p className="text-xs sm:text-sm text-yellow-700">
                Здесь будет сообщение об ошибке или предупреждение.
              </p>
            </div>
          </div>
          <div className="flex items-start p-3 sm:p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
            <span className="material-icons text-blue-500 mr-2 sm:mr-3">
              info
            </span>
            <div>
              <p className="font-medium text-blue-800 text-sm sm:text-base">
                Информация
              </p>
              <p className="text-xs sm:text-sm text-blue-700">
                Система учета баллов изменения.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
            Система подсчета баллов
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
            {menuItems?.map((value, index) => (
              <SystemComponent
                key={index}
                img={value.img}
                text={value.text}
                link={value.link}
                setState={setState}
              />
            ))}
          </div>
        </div>
        {state === "Текущий контроль" && <CurrentControl />}
        {state === "Рейтинг допуска 1" && (
          <Rating1
            disciplines={[
              {
                id: 1,
                disciplina_name: "Физика",
                ssjurnal_nedelya:
                  "2@85@0$3@90@5$4@78@10$5@92@0$6@88@5$7@95@0$8@85@10",
              },
              {
                id: 2,
                disciplina_name: "Математика",
                ssjurnal_nedelya:
                  "2@90@0$3@85@5$4@92@10$5@88@0$6@95@5$7@85@0$8@90@10",
              },
            ]}
          />
        )}
        {state === "Итог" && <Itog />}
        {state === "Расписание занятий" && <Rasp />}
        {state === "Регистрация" && <Reg />}
        {state === "Академ. задолженность" && <Summer />}
        {state === "Рейтинг допуска 2" && <Rating2 />}
        {state === "ИТП" && <Iup />}
        {state === "Расписание экзаменов" && <RaspEkzamen />}
      </div>
    </div>
  );
}
