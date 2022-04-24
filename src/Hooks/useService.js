import { useEffect, useState } from "react";

const useService = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://agile-oasis-47558.herokuapp.com/addservice")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, [loading]);

  return { services, setLoading, loading };
};

export default useService;
