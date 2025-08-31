import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export const useData = <T>(
  endpoint: string
): {
  data: T[];
  error: string;
  loading: boolean;
} => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<{ results: T[]; count: number }>(endpoint, {
        signal: controller.signal,
      })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return {
    data,
    loading,
    error,
  };
};
