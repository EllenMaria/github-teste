import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export default function useAxios(configRequest) {
  const { axiosInstance, method, url } = configRequest;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const navigation = () => {
    navigate("/");
  };

  const run = useRef(false);

  const fetchData = async () => {
    const controller = new AbortController();
    try {
      const response = await axiosInstance[method](url, {
        signal: controller.signal,
      });
      setData(response.data);
      setLoading(false);
      return response.data;
    } catch (error) {
      setError(error.message);
      navigation()
      toast.error("Something went wrong, try again!", {
      toastId: 'error1'
    })
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    if (run.current) {
      fetchData();
    } else {
      run.current = true;
    }
  }, []);

  return [data, loading, error];
}
