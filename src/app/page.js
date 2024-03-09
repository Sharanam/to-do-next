import Link from "next/link";
import ViewToDo from "./view";
import { CreateToDo } from "./create";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ViewToDo />
      <CreateToDo />
    </main>
  );
}
