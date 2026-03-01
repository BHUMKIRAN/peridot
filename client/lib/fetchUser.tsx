"use client";
import axiosInstance from "./axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { Users } from "lucide-react";

type User = {
  _id: string;
  name: string;
};


// ✅ API function (ONLY fetches data)
const fetchUsers = async (): Promise<User[]> => {
  const res = await axiosInstance.get("/user");
  return res.data;
};


// ✅ React component (USES TanStack Query)
const UsersList = () => {

  const {
    data,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });


  if (isLoading) return <p>Loading users...</p>;

  if (isError) return <p>Error: {error?.message || "An error occurred"}</p>;


  return (
    <div>

      <h2 className="flex items-center gap-2">
        <Users size={20} />
        All Users
      </h2>

      {data?.map((user) => (
        <div key={user._id}>
          {user.name}
        </div>
      ))}

    </div>
  );
};

export default UsersList;
