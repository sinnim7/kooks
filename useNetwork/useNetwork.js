export const useNetwork = onchange => {
  const [status, setStatus] = useState(navigator.onLine);
  //navigator.onLine 은 navigator가 온라인인지 아닌지를 true 또는 false로 표현
  const handleChange = () => {
    if (typeof onchange === "function") {
      onchange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};
