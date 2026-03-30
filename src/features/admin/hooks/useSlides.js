import { useQuery } from "@tanstack/react-query";
import { getSlides } from "../../../shared/apiClient";

export default function useSlides() {
  const {
    data: slides,
    isPending,
    error,
    isError,
  } = useQuery({
    queryFn: getSlides,
    queryKey: ["slides"],
    placeholderData: [],
    refetchInterval: 5000, // Refaz a query a cada 5 segundos para manter atualizado
  });

  return { slides, isPending, error, isError };
}
