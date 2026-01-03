import AuthForm from "@/components/AuthForm";
import Navigation from "@/components/Navigation";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <AuthForm mode="register" />
      </main>
    </div>
  );
}
