import { ProfileForm } from "@/components/MainForm";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { MainForm } from "@/components/MainForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="absolute top-6 right-6">
        <ModeToggle />
      </div>
      <MainForm />
    </main>
  );
}
