import Link from "next/link";

const Homepage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Link
        href="/admin"
        className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
      >
        Admin Page
      </Link>
    </div>
  );
};

export default Homepage;
