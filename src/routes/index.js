import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
// layouts
import DashboardLayout from "../layouts/dashboard";
import LogoOnlyLayout from "../layouts/LogoOnlyLayout";
// guards
import GuestGuard from "../guards/GuestGuard";
import AuthGuard from "../guards/AuthGuard";
// import RoleBasedGuard from '../guards/RoleBasedGuard';
// config
import { PATH_AFTER_LOGIN } from "../config";
// components
import LoadingScreen from "../components/LoadingScreen";

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense
      fallback={<LoadingScreen isDashboard={pathname.includes("/dashboard")} />}
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "auth",
      children: [
        {
          path: "login",
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ),
        },
        {
          path: "register",
          element: (
            <GuestGuard>
              <Register />
            </GuestGuard>
          ),
        },
        { path: "login-unprotected", element: <Login /> },
        { path: "register-unprotected", element: <Register /> },
        { path: "reset-password", element: <ResetPassword /> },
        { path: "new-password", element: <NewPassword /> },
        { path: "verify", element: <VerifyCode /> },
      ],
    },

    // Dashboard Routes
    {
      path: "dashboard",
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: "app", element: <GeneralApp /> },
        { path: "ecommerce", element: <GeneralEcommerce /> },
        { path: "analytics", element: <GeneralAnalytics /> },
        { path: "banking", element: <GeneralBanking /> },
        { path: "booking", element: <GeneralBooking /> },

        {
          path: "e-commerce",
          children: [
            {
              element: <Navigate to="/dashboard/e-commerce/shop" replace />,
              index: true,
            },
            { path: "shop", element: <EcommerceShop /> },
            { path: "product/:name", element: <EcommerceProductDetails /> },
            { path: "list", element: <EcommerceProductList /> },
            { path: "product/new", element: <EcommerceProductCreate /> },
            { path: "product/:name/edit", element: <EcommerceProductCreate /> },
            { path: "checkout", element: <EcommerceCheckout /> },
          ],
        },
        {
          path: "user",
          children: [
            {
              element: <Navigate to="/dashboard/user/profile" replace />,
              index: true,
            },
            { path: "profile", element: <UserProfile /> },
            { path: "cards", element: <UserCards /> },
            { path: "list", element: <UserList /> },
            { path: "new", element: <UserCreate /> },
            { path: ":name/edit", element: <UserCreate /> },
            { path: "account", element: <UserAccount /> },
          ],
        },
        {
          path: "invoice",
          children: [
            {
              element: <Navigate to="/dashboard/invoice/list" replace />,
              index: true,
            },
            { path: "list", element: <InvoiceList /> },
            { path: ":id", element: <InvoiceDetails /> },
            { path: ":id/edit", element: <InvoiceEdit /> },
            { path: "new", element: <InvoiceCreate /> },
          ],
        },
        {
          path: "blog",
          children: [
            {
              element: <Navigate to="/dashboard/blog/posts" replace />,
              index: true,
            },
            { path: "posts", element: <BlogPosts /> },
            { path: "post/:title", element: <BlogPost /> },
            { path: "new", element: <BlogNewPost /> },
          ],
        },
        {
          path: "mail",
          children: [
            {
              element: <Navigate to="/dashboard/mail/all" replace />,
              index: true,
            },
            { path: "label/:customLabel", element: <Mail /> },
            { path: "label/:customLabel/:mailId", element: <Mail /> },
            { path: ":systemLabel", element: <Mail /> },
            { path: ":systemLabel/:mailId", element: <Mail /> },
          ],
        },
        {
          path: "chat",
          children: [
            { element: <Chat />, index: true },
            { path: "new", element: <Chat /> },
            { path: ":conversationKey", element: <Chat /> },
          ],
        },
        { path: "calendar", element: <Calendar /> },
        { path: "kanban", element: <Kanban /> },
        { path: "permission-denied", element: <PermissionDenied /> },
      ],
    },

    // Main Routes
    {
      path: "*",
      element: <LogoOnlyLayout />,
      children: [
        { path: "coming-soon", element: <ComingSoon /> },
        { path: "maintenance", element: <Maintenance /> },
        { path: "pricing", element: <Pricing /> },
        { path: "payment", element: <Payment /> },
        { path: "mammography-2", element: <Mammography2 /> },
        { path: "mammography-3", element: <Mammography3 /> },
        { path: "mammography-1", element: <Mammography1 /> },
        { path: "risk-level-prediction", element: <RiskLevelPrediction /> },
        { path: "calculate-risk-form", element: <CalculateRiskForm /> },
        { path: "survival-prediction", element: <SurvivalPrediction /> },
        { path: "predict-survival-form", element: <PredictSurvivalForm /> },
        { path: "home", element: <Home /> },
        { path: "*", element: <Home /> },
        { path: "chat-box", element: <ChatBox /> },
        { path: "temp", element: <Temp /> },
        { path: "admin-mammography-1", element: <AdminMammography1 /> },
        { path: "admin-mammography-2", element: <AdminMammography2 /> },
        { path: "admin-mammography-3", element: <AdminMammography3 /> },
        {
          path: "admin-risk-level-prediction",
          element: <AdminRiskLevelPrediction />,
        },
        {
          path: "admin-survival-prediction",
          element: <AdminSurvivalPrediction />,
        },
        {
          path: "for-you",
          element: <ForYou />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
        {
          path: "user-management",
          element: <UserManagement />,
        },
        {
          path: "admin-settings",
          element: <AdminSettings />,
        },
        { path: "admin-user-management", element: <AdminUserManagement /> },
        { path: "knowledge-management", element: <KnowledgeManagement /> },
        {
          path: "admin-knowledge-management",
          element: <AdminKnowledgeManagement />,
        },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

// AUTHENTICATION
const Login = Loadable(lazy(() => import("../pages/auth/Login")));
const Register = Loadable(lazy(() => import("../pages/auth/Register")));
const ResetPassword = Loadable(
  lazy(() => import("../pages/auth/ResetPassword"))
);
const NewPassword = Loadable(lazy(() => import("../pages/auth/NewPassword")));
const VerifyCode = Loadable(lazy(() => import("../pages/auth/VerifyCode")));

// DASHBOARD

// GENERAL
const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/GeneralApp"))
);
const GeneralEcommerce = Loadable(
  lazy(() => import("../pages/dashboard/GeneralEcommerce"))
);
const GeneralAnalytics = Loadable(
  lazy(() => import("../pages/dashboard/GeneralAnalytics"))
);
const GeneralBanking = Loadable(
  lazy(() => import("../pages/dashboard/GeneralBanking"))
);
const GeneralBooking = Loadable(
  lazy(() => import("../pages/dashboard/GeneralBooking"))
);

// ECOMMERCE
const EcommerceShop = Loadable(
  lazy(() => import("../pages/dashboard/EcommerceShop"))
);
const EcommerceProductDetails = Loadable(
  lazy(() => import("../pages/dashboard/EcommerceProductDetails"))
);
const EcommerceProductList = Loadable(
  lazy(() => import("../pages/dashboard/EcommerceProductList"))
);
const EcommerceProductCreate = Loadable(
  lazy(() => import("../pages/dashboard/EcommerceProductCreate"))
);
const EcommerceCheckout = Loadable(
  lazy(() => import("../pages/dashboard/EcommerceCheckout"))
);

// INVOICE
const InvoiceList = Loadable(
  lazy(() => import("../pages/dashboard/InvoiceList"))
);
const InvoiceDetails = Loadable(
  lazy(() => import("../pages/dashboard/InvoiceDetails"))
);
const InvoiceCreate = Loadable(
  lazy(() => import("../pages/dashboard/InvoiceCreate"))
);
const InvoiceEdit = Loadable(
  lazy(() => import("../pages/dashboard/InvoiceEdit"))
);

// BLOG
const BlogPosts = Loadable(lazy(() => import("../pages/dashboard/BlogPosts")));
const BlogPost = Loadable(lazy(() => import("../pages/dashboard/BlogPost")));
const BlogNewPost = Loadable(
  lazy(() => import("../pages/dashboard/BlogNewPost"))
);

// USER
const UserProfile = Loadable(
  lazy(() => import("../pages/dashboard/UserProfile"))
);
const UserCards = Loadable(lazy(() => import("../pages/dashboard/UserCards")));
const UserList = Loadable(lazy(() => import("../pages/dashboard/UserList")));
const UserAccount = Loadable(
  lazy(() => import("../pages/dashboard/UserAccount"))
);
const UserCreate = Loadable(
  lazy(() => import("../pages/dashboard/UserCreate"))
);

// APP
const Chat = Loadable(lazy(() => import("../pages/dashboard/Chat")));
const Mail = Loadable(lazy(() => import("../pages/dashboard/Mail")));
const Calendar = Loadable(lazy(() => import("../pages/dashboard/Calendar")));
const Kanban = Loadable(lazy(() => import("../pages/dashboard/Kanban")));

// TEST RENDER PAGE BY ROLE
const PermissionDenied = Loadable(
  lazy(() => import("../pages/dashboard/PermissionDenied"))
);

// MAIN
const HomePage = Loadable(lazy(() => import("../pages/Home")));
const About = Loadable(lazy(() => import("../pages/About")));
const Contact = Loadable(lazy(() => import("../pages/Contact")));
const Faqs = Loadable(lazy(() => import("../pages/Faqs")));
const ComingSoon = Loadable(lazy(() => import("../pages/ComingSoon")));
const Maintenance = Loadable(lazy(() => import("../pages/Maintenance")));
const Pricing = Loadable(lazy(() => import("../pages/Pricing")));
const Payment = Loadable(lazy(() => import("../pages/Payment")));
const Mammography2 = Loadable(lazy(() => import("../pages/Mammography2")));
const Mammography1 = Loadable(lazy(() => import("../pages/Mammography1")));
const Mammography3 = Loadable(lazy(() => import("../pages/Mammography3")));
const RiskLevelPrediction = Loadable(
  lazy(() => import("../pages/RiskLevelPrediction"))
);
const CalculateRiskForm = Loadable(
  lazy(() => import("../pages/CalculateRiskForm"))
);
const SurvivalPrediction = Loadable(
  lazy(() => import("../pages/SurvivalPrediction"))
);
const PredictSurvivalForm = Loadable(
  lazy(() => import("../pages/PredictSurvivalForm"))
);
const Home = Loadable(lazy(() => import("../pages/Home/HomeIndex")));
const ChatBox = Loadable(lazy(() => import("../pages/ChatBox")));
const Temp = Loadable(lazy(() => import("../pages/Admin/Temp")));
const AdminMammography1 = Loadable(
  lazy(() => import("src/pages/Admin/AdminMammography1"))
);
const AdminMammography2 = Loadable(
  lazy(() => import("src/pages/Admin/AdminMammography2"))
);
const AdminMammography3 = Loadable(
  lazy(() => import("src/pages/Admin/AdminMammography3"))
);
const AdminRiskLevelPrediction = Loadable(
  lazy(() => import("src/pages/Admin/AdminRiskLevelPrediction"))
);
const AdminSurvivalPrediction = Loadable(
  lazy(() => import("src/pages/Admin/AdminSurvivalPrediction"))
);
const ForYou = Loadable(lazy(() => import("src/pages/Admin/ForYou")));
const Settings = Loadable(lazy(() => import("src/pages/Settings")));
const AdminSettings = Loadable(
  lazy(() => import("src/pages/Admin/AdminSettings"))
);
const UserManagement = Loadable(lazy(() => import("src/pages/UserManagement")));
const AdminUserManagement = Loadable(
  lazy(() => import("src/pages/Admin/AdminUserManagement"))
);
const KnowledgeManagement = Loadable(
  lazy(() => import("src/pages/KnowledgeManagement"))
);
const AdminKnowledgeManagement = Loadable(
  lazy(() => import("src/pages/Admin/AdminKnowledgeManagement"))
);
