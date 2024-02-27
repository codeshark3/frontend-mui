import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Routes,
} from "react-router-dom";
import DashboardScreen from "./screens/DashboardScreen";
import TestsScreen from "./screens/TestsScreen";
import TestDetailsScreen from "./screens/TestDetailsScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import NotFound from "./screens/NotFound";
import RootLayout from "./layouts/RootLayout";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./components/global/TopBar";
import CustomSidebar from "./components/global/CustomSideBar";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DashboardScreen />}>
      <Route index element={<DashboardScreen />} />
      <Route path="register" element={<RegisterScreen />} />
      <Route path="login" element={<LoginScreen />} />
      {/* <Route path="profile" element={<ProfileScreen />} /> */}
      <Route path="/tests" element={<TestsScreen />} />
      <Route
        path="test/:id"
        element={<TestDetailsScreen />}
        // loader={docsDetailsLoader}
      />
      {/* <Route path="/admin/userlist" element={<UserListScreen/>} />
          <Route path="/admin/user/:id/edit" element={<UserEditScreen/>} /> */}
      {/* <Route path="docs/create" element={<AddDocScreen />} /> */}
      {/* <Route
        path="docs/edit/:id"
        element={<EditDocScreen />}
        loader={docEditLoader}
      /> */}

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <CustomSidebar />
          <main className="content">
            <Topbar />
            {/* <RouterProvider router={router} />; */}
            <Routes>
              <Route path="/" element={<DashboardScreen />} />
              <Route path="/tests" element={<TestsScreen />} />
              <Route path="tests/:id" element={<TestDetailsScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/admin/userlist" element={<UserListScreen />} />
              <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
