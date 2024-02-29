import Form from "./Form";
import OldT from "./OldT";
import NewT from "./NewT";
import App from "./App.js";
import ErrorPage from "./ErrorPage.js";

const routes = [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />
    },
    {
      path: "/oldtestament",
      element: <OldT />,
      errorElement: <ErrorPage />
    },
    {
      path: "/newtestament",
      element: <NewT />,
      errorElement: <ErrorPage />
    }
];

export default routes;