import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { HomeContainer } from "./components/home/homeContainer";

const Form = lazy(() => import("./components/form/formContainer"));
export const App = () => (
  <main>
    <Routes>
      <Route element={<HomeContainer />} path={"/"} />
      <Route
        element={
          <Suspense fallback="loading">
            <Form />
          </Suspense>
        }
        path={"/form"}
      />
      <Route
        element={
          <Suspense fallback="loading">
            <Form />
          </Suspense>
        }
        path={"/form/edit"}
      />
    </Routes>
  </main>
);
