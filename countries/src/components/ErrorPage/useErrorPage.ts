import { useNavigate } from "react-router-dom";

export const useErrorPage = () => {
  const navigate = useNavigate();

  const goHome = () => navigate("/");

  return { goHome };
};
