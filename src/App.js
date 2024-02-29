import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Component/Home";
import DetailView from "./Component/DetailView";
import UserLayout from "./Layout/UserLayout";
import Network from "./Component/Network";
import DetailLayout from "./Layout/DetailLayout";
import UserList from "./Component/UserList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route element={<UserLayout />}>
        <Route path="home/users" element={<UserList />} />
        <Route element={<DetailLayout />}>
          <Route path="home/users/:id" element={<DetailView />} />
        </Route>
        <Route path="home/networks" element={<Network />} />
      </Route>
      <Route path="*" element={<Navigate to={"/"} />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
