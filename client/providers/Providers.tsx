"use client"

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../redux/store";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queyClient";
type ProviderProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}> {/*tanstack provider*/}
      <Provider store={store}>{/*redux provider*/}
        <PersistGate persistor={persistor} loading={null}>{/**persistor*/}
          {children}
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default Providers;
