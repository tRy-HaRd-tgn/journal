"use client";

import { menuItems } from "./data";
import { useState } from "react";
import { CurrentControl } from "@/components/currentControl";
import Rating1 from "@/components/rating1";
import ScheduleCalendar from "@/components/scheduleCalendar";
import { SystemComponent } from "@/components/systemComponent";
import Rasp from "@/components/raspisanie";
import Itog from "@/components/itog";
import Reg from "@/components/register";
export default function Page() {
  const [state, setState] = useState("");

  return (
    <div className="bg-gray-50 font-sans">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-indigo-800">
            Журнал успеваемости
          </h1>
          <div className="flex items-center mt-2 text-gray-600">
            <span className="material-icons mr-1">school</span>
            <span>2024-2025 учебный год</span>
            <span className="mx-2">|</span>
            <span className="font-medium">Георгий Иванович</span>
            <span className="ml-1 px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
              41
            </span>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

        <div className="mb-6 space-y-3">
          <div className="flex items-start p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
            <span className="material-icons text-yellow-500 mr-3">warning</span>
            <div>
              <p className="font-medium text-yellow-800">Внимание</p>
              <p className="text-sm text-yellow-700">
                Здесь будет сообщение об ошибке или предупреждение.
              </p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
            <span className="material-icons text-blue-500 mr-3">info</span>
            <div>
              <p className="font-medium text-blue-800">Информация</p>
              <p className="text-sm text-blue-700">
                Система учета баллов изменения.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 ">
            Система подсчета баллов
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
        {state === "Рейтинг допуска 1" && <Rating1 />}
        {state === "Итог" && <Itog />}
        {state === "Расписание занятий" && <Rasp />}
        {state === "Регистрация" && <Reg />}
      </div>
    </div>
  );
}
