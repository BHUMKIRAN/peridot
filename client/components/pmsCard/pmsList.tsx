"use client"
import  { useEffect, useState } from "react";
import PMSCard from "./pmsCard";
import { fetchAllPMS } from "../../lib/pms";
import type { PMS } from "../../lib/pms";

interface PMSListProps {
  filterModel?: string;
}

const PMSList = ({ filterModel }: PMSListProps) => {
  const [pmsList, setPmsList] = useState<PMS[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchAllPMS();
        if (filterModel) {
          setPmsList(data.filter((item: PMS) => item.modelType === filterModel));
        } else {
          setPmsList(data);
        }
      } catch (error) {
        console.error("Failed to fetch PMS data:", error);
        setPmsList([]);
      }
    };
    getData();
  }, [filterModel]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {pmsList.map((pms: PMS) => (
        <PMSCard key={pms._id} pms={pms} />
      ))}
    </div>
  );
};

export default PMSList;
