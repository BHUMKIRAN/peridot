import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // it will store the data for 5 minutes
      gcTime: 1000 * 60 * 10, //cache will be stays for 10 minutes
      refetchOnWindowFocus: true, // it will refetch the data when the window is focused
      retry: 1, // it will retry the query 1 time
    },
  },
});
