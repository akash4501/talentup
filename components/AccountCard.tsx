import Link from "next/link";

type AccountCardProps = {
  title: string;
  icon: string;
  description: string;
  buttonText: string;
  link: string;
  features: string[];
};

export default function AccountCard({
  title,
  icon,
  description,
  buttonText,
  link,
  features,
}: AccountCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-10 border hover:border-blue-600 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <div className="text-7xl text-center">
        {icon}
      </div>

      <h2 className="text-3xl font-bold text-center mt-6 text-gray-900">
        {title}
      </h2>

      <p className="text-gray-600 text-center mt-4">
        {description}
      </p>

      <div className="mt-8 space-y-3">
        {features.map((feature) => (
          <p
            key={feature}
            className="text-gray-700 flex items-center gap-2"
          >
            ✅ {feature}
          </p>
        ))}
      </div>

      <Link href={link}>
        <button className="w-full mt-10 bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition">
          {buttonText}
        </button>
      </Link>

    </div>
  );
}