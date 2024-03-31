import Contact from "./pages/Contact";
import Conception from "./pages/conception";
import Home from "./pages/home";
import Realisation from "./pages/realisation";
import Services from "./pages/services";

const AppRoutes = [
  {
    index: true,
    path: "maknirenov/",
    key: 1,
    title: "Acceuil",
    element: <Home />,
  },
  {
    key: 2,
    path: "maknirenov/Realisation",
    title: "Realisation",
    element: <Realisation />,
  },
  {
    key: 3,
    path: "maknirenov/Conception",
    title: "Conception",
    element: <Conception />,
  },
  {
    key: 3,
    path: "maknirenov/Contact",
    title: "Contact",
    element: <Contact />,
  },
];

export default AppRoutes;
