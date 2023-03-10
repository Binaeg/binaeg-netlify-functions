import Navbar from "@/components/Navbar";
import NewUserForm from "@/components/NewUserForm";
import UserTable from "@/components/UserTable";

export default function Home() {
  return (
    <div>
      <Navbar />
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Getränketeam
          </h1>
        </div>
      </header>

      <main>
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          {/* <div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div> */}
          <UserTable/>
        </div>
      </main>
    </div>
  );
}
