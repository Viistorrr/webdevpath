import MainStats from "@components/Dashboard/Stats";
import List from "@components/Dashboard/List";

export default function Dashboard() {
  return (
    <>
      <main className="flex-1">
        {/* Main Stats */}
        <div className="mt-6 px-4 sm:px-6 lg:px-8">
          <MainStats />
        </div>
        {/*Main Projects list*/}
        <List />
      </main>
    </>
  );
}
