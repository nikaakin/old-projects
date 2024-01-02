import { useErrorPage } from "./useErrorPage";

export const ErrorPage = () => {
  const { goHome } = useErrorPage();

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-2xl">Something went wrong</div>
      <button
        onClick={goHome}
        className="mt-5 text-lg cursor-pointer border-black border bg-blue-300 "
      >
        Home
      </button>
    </div>
  );
};
