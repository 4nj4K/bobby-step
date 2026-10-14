import Calendar from "@/components/Calendar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="text-center mb-8">
        <h1 className="font-badeen text-5xl text-amber-600 mb-2">
          BobbyStep
        </h1>
        <p className="text-gray-500 text-sm">
          Håll koll på familjens hundpromenader med Bobby 🐾
        </p>
      </div>

      <Calendar />
    </main>
  );
}