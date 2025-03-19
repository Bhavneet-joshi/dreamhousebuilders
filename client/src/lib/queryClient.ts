import { QueryClient } from "@tanstack/react-query";

// Mock API request for frontend-only usage
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<{ json: () => Promise<any> }> {
  console.log(`Mock API request: ${method} ${url}`, data);
  
  // Return a mock successful response
  return {
    json: async () => ({ success: true, message: "Operation completed successfully" })
  };
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
