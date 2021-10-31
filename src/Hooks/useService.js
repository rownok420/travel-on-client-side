import { useEffect, useState } from "react";

const useService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://agile-oasis-47558.herokuapp.com/addservice")
            .then((res) => res.json())
            .then((data) => {
                setServices(data);
            });
    }, []);

    return [services];
};

export default useService;
