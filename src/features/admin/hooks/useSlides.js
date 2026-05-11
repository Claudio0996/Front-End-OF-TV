import { useQuery } from "@tanstack/react-query";
import { getSlides } from "../../../shared/apiClient";
import useAuth from "../../auth/hooks/useAuth";

export default function useSlides() {
  const { state } = useAuth();

  const {
    data: slides,
    isPending,
    error,
    isError,
  } = useQuery({
    queryFn: () => getSlides(state.token),
    queryKey: ["slides"],
    placeholderData: [],
    refetchInterval: 5000, // Refaz a query a cada 5 segundos para manter atualizado
  });

  return { slides, isPending, error, isError };
}
