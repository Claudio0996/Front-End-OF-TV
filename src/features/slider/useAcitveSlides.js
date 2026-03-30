import { useQuery } from "@tanstack/react-query";
import { getActiveSlides } from "../../shared/apiClient.js";

export default function useActiveSlide() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["slides", "active"],
    queryFn: getActiveSlides,
    placeholderData: [],
    refetchInterval: 5000, // Refaz a query a cada 5 segundos para atualizações em tempo real
  });

  return { isPending, isError, data, error };
}
