import { useEffect, useState } from "react";

const useStatusCheck = () => {
  const [checkStatus, setCheckStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setCheckStatus(false);
    });

    window.addEventListener("online", () => {
      setCheckStatus(true);
    });
  }, []);

  return checkStatus;
};

export default useStatusCheck;
