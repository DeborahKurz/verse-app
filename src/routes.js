import Form from "./Form";
import OldT from "./OldT";
import NewT from "./NewT";
import App from "./App.js";

const routes = [
    {
      path: "/",
      element: <App />
    },
    // {
    //     path: "/form",
    //     element: <Form />
    // }, 
    {
      path: "/oldtestament",
      element: <OldT />
    },
    {
      path: "/newtestament",
      element: <NewT />
    }
];

export default routes;