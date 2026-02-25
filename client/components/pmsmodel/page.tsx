import Link from "next/link";

interface LandingPageProps {
  open: boolean;
}

const LandingPage = ({ open }: LandingPageProps) => {

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl bg-opacity-50">
      <div className="flex flex-col items-center justify-center h-100 bg-gray-100 rounded-xl p-3">
        <h1 className="text-4xl font-bold mb-8">PMS Models</h1>
        <div className="flex gap-8">
          <Link
            href="/diamond"
            className="px-6 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Diamond Model
          </Link>
          <Link
            href="/platinum"
            className="px-6 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Platinum Model
          </Link>
        </div>
      </div>
    </div>

  );
};

export default LandingPage;
