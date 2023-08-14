import { ModeToggle } from "@/components/theme-toggle";
import { Landing } from "@/components/Landing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="absolute top-6 right-6">
        <ModeToggle />
      </div>
      <Landing />
    </main>
  );
}
