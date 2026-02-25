import type { PMS } from "../../lib/pms";

interface PMSCardProps {
  pms: PMS;
}

const PMSCard = ({ pms }: PMSCardProps) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white w-full max-w-sm">
      <h2 className="text-xl font-bold">{pms.modelType} Model</h2>
      <p>User ID: {pms.userId}</p>
      <p>Investment: ${pms.investmentAmount}</p>
      <p>Current Value: ${pms.currentValue}</p>
      <p>
        Loss Sharing: Client {pms.lossSharing.clientPercentage}% | Company{" "}
        {pms.lossSharing.companyPercentage}%
      </p>
    </div>
  );
};

export default PMSCard;
