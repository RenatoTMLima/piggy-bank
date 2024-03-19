import { ReactNode } from "react";

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return (
    <main className="w-full min-h-screen bg-liver-200 py-5 px-10">
      <div className="bg-liver-50 border border-liver-500 ring ring-liver-300/20 rounded-md min-h-full">
        {children}
      </div>
    </main>
  );
}
