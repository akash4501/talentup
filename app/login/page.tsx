import { accounts } from "@/data/accounts";
import AccountCard from "@/components/AccountCard";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50 px-8 py-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-5xl font-bold text-center text-gray-900">
          Choose Your Account
        </h1>

        <p className="text-center text-gray-600 mt-4">
          Continue as Student or Recruiter
        </p>

        {/* Account Cards */}
        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {accounts.map((account) => (
            <AccountCard
              key={account.title}
              title={account.title}
              icon={account.icon}
              description={account.description}
              buttonText={account.buttonText}
              link={account.link}
              features={account.features}
            />
          ))}
        </div>

      </div>
    </main>
  );
}