export default function DashboardCards() {

  const cards = [
    {
      title: "Applied Jobs",
      value: "12",
      color: "text-blue-600",
      icon: "📄",
    },
    {
      title: "Saved Jobs",
      value: "8",
      color: "text-green-600",
      icon: "❤️",
    },
    {
      title: "Resume Score",
      value: "92%",
      color: "text-purple-600",
      icon: "📑",
    },
    {
      title: "Interviews",
      value: "3",
      color: "text-red-600",
      icon: "🎯",
    },
  ];

  return (

    <div className="grid md:grid-cols-4 gap-6">

      {cards.map((card) => (

        <div
          key={card.title}
          className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
        >

          <div className="text-4xl">
            {card.icon}
          </div>

          <h3 className="mt-5 text-gray-600">
            {card.title}
          </h3>

          <p className={`text-4xl font-bold mt-2 ${card.color}`}>
            {card.value}
          </p>

        </div>

      ))}

    </div>

  );
}