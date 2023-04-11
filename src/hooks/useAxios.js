import { useState, useEffect } from "react";
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


  useEffect(() => {
  const fetchData = async () => {
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
       fetchData();
  }, []);

  return [data, loading, error];
}
