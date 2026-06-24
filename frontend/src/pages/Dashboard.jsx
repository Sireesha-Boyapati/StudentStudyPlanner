function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        Student Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold">
            Subjects
          </h2>

          <p className="text-4xl mt-3">
            0
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold">
            Tasks
          </h2>

          <p className="text-4xl mt-3">
            0
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold">
            Completed
          </h2>

          <p className="text-4xl mt-3">
            0
          </p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;