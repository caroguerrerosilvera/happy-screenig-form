import Head from "next/head";
import { useState } from "react";
import { DatePicker, Slider } from "antd";
import "antd/dist/antd.css";
import { disabledDate } from "@/utils/datesManager";

const SENIORITIES = [
  {
    label: "Junior",
    minSalary: 1000000,
    maxSalary: 3000000
  },
];

export default function Home() {
  const defaultSeniority = SENIORITIES[0];
  const [application, setApplication] = useState({
    startDate: null,
    seniority: defaultSeniority.label,
  });
  
  const [salaryInfo, setSalaryInfo] = useState({
    min: defaultSeniority.minSalary,
    max: defaultSeniority.maxSalary,
    sliderRange: { 0: `$${defaultSeniority.minSalary}`}
  });

  function handleDateChange(day) {
    setApplication((prevState) => ({
      ...prevState,
      startDate: day,
    }));
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Ayenda | Job application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 lg:px-10 lg:px-20 text-center">
        <div>
          <h2 className="text-3xl lg:text-4xl font-semibold">
            Join our team 🥸
          </h2>
          <div className="border-b border-gray-200"></div>
          <div className="space-y-5">
            <label className="block text-left">
              <span className="text-gray-800">Tu usuario de Github</span>
              <input
                type="email"
                className="w-full focus:border focus:border-green-400 outline-none focus:bg-white bg-gray-100 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-2"
                placeholder="username"
              />
            </label>
            <label className="block text-left">
              <span className="text-gray-800">¿Cúales son tus skills?</span>
              <input
                type="email"
                className="w-full focus:border focus:border-green-400 outline-none focus:bg-white bg-gray-100 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-2"
                placeholder="username"
              />
            </label>
            <label className="block text-left">
              <span className="text-gray-800">
                ¿Cuantos años de experiencia tienes?
              </span>
              <input
                type="email"
                className="w-full focus:border focus:border-green-400 outline-none focus:bg-white bg-gray-100 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-2"
                placeholder="username"
              />
            </label>
            <label className="block text-left">
              <span className="text-gray-800">
                ¿En qué seniority te consideras?
              </span>
              <input
                type="email"
                className="w-full focus:border focus:border-green-400 outline-none focus:bg-white bg-gray-100 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-2"
                placeholder="username"
              />
            </label>
            <label className="block text-left">
              <span className="text-gray-800">
                What are your salary expectations 🤑 ?{" "}
                <span className="text-red-400 font-medium italic">
                  (required)
                </span>
              </span>
              <Slider
                step={100000}
                min={salaryInfo.min}
                max={salaryInfo.max}
              />
            </label>
            <label className="block flex flex-col items-start space-y-3">
              <span className="text-gray-800">
                When can you start working?{" "}
                <span className="text-red-400 font-medium italic">
                  (required)
                </span>
              </span>
              <DatePicker
                className="w-full focus:border focus:border-green-400 outline-none focus:bg-white bg-gray-100 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-2"
                placeholder="Select your start date"
                showToday
                disabledDate={disabledDate}
                onChange={handleDateChange}
              />
            </label>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center space-x-1 w-full h-24 border-t">
        <span>Made by</span>
        <strong>Caro Guerrero</strong>
      </footer>
    </div>
  );
}
