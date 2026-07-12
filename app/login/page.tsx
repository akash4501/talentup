import { accounts } from "@/data/accounts";
import AccountCard from "@/components/AccountCard";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-8 py-20">
      <div className="max-w-7xl w-full">

        <h1 className="text-5xl font-bold text-center text-gray-900">
          Choose Your Account
        </h1>

        <p className="text-center text-gray-600 mt-4">
          Continue as a Student or Recruiter
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
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