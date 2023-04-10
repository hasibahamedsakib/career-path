import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <li>{error.status}</li>
        <li>{error.statusText}</li>
        <li>{error.error.message}</li>
      </p>
    </div>
  );
}
