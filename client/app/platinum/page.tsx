import Link from "next/link";
import PMSList from "../../components/pmsCard/pmsList";


const PlatinumPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Platinum Model Accounts</h1>
        <Link href="/" className="text-blue-500 hover:underline">
          Back
        </Link>
      </div>
      <PMSList filterModel="Platinum" />
    </div>
  );
};

export default PlatinumPage;