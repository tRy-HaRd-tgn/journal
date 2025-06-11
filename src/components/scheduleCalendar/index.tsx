// components/ScheduleCalendar.tsx
const schedule = [
  { day: "Понедельник", time: "08:30–10:00", subject: "Математика" },
  { day: "Понедельник", time: "10:10–11:40", subject: "Физика" },
  { day: "Вторник", time: "12:00–13:30", subject: "Информатика" },
];

export default function ScheduleCalendar() {
  return (
    <div className="space-y-4">
      {schedule.map((item, index) => (
        <div key={index} className="p-4 border rounded-xl shadow-sm bg-white">
          <div className="text-lg font-medium">{item.subject}</div>
          <div className="text-sm text-muted-foreground">
            {item.day}, {item.time}
          </div>
        </div>
      ))}
    </div>
  );
}
