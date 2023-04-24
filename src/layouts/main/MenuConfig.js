// routes
import { PATH_AUTH, PATH_DOCS, PATH_PAGE } from "../../routes/paths";
// components
// components
import Iconify from "../../components/Iconify";

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: "Home",
    icon: <Iconify icon={"eva:home-fill"} {...ICON_SIZE} />,
    path: PATH_PAGE.home,
  },
  {
    title: "About You",
    icon: <Iconify icon={"gg:profile"} {...ICON_SIZE} />,
    path: "#",
  },
  {
    title: "Community",
    icon: (
      <Iconify icon={"fluent:people-community-add-28-filled"} {...ICON_SIZE} />
    ),
    path: "#",
  },

  {
    title: "Pages",
    path: "/pages",
    icon: <Iconify icon={"eva:file-fill"} {...ICON_SIZE} />,
    children: [
      {
        subheader: "Home",
        items: [
          { title: "Home", path: PATH_PAGE.home },
          { title: "Chat Box", path: PATH_PAGE.chat_box },
          // { title: "About us", path: PATH_PAGE.about },
          // { title: "Contact us", path: PATH_PAGE.contact },
          //{ title: "FAQs", path: PATH_PAGE.faqs },
          // { title: "Pricing", path: PATH_PAGE.pricing },
          // { title: "Payment", path: PATH_PAGE.payment },
          //
        ],
      },
      {
        subheader: "Authentication",
        items: [
          { title: "Login", path: PATH_AUTH.login },
          { title: "Register", path: PATH_AUTH.register },
          // { title: "Reset password", path: PATH_AUTH.resetPassword },
          // { title: "Verify code", path: PATH_AUTH.verify },
        ],
      },
      {
        subheader: "Others",
        items: [
          { title: "Mammography 1", path: PATH_PAGE.mammography1 },
          { title: "Mammography 2", path: PATH_PAGE.mammography2 },
          { title: "Mammography 3", path: PATH_PAGE.mammography3 },
          {
            title: "Risk Level Prediction",
            path: PATH_PAGE.risk_level_prediction,
          },
          {
            title: "Calculate Risk Form",
            path: PATH_PAGE.calculate_risk_form,
          },
          {
            title: "Survival Prediction",
            path: PATH_PAGE.survival_prediction,
          },
          {
            title: "Predict Survival Form",
            path: PATH_PAGE.predict_survival_form,
          },
        ],
      },
      {
        subheader: "Admin",
        items: [
          { title: "temp", path: PATH_PAGE.temp },
          { title: "Admin Mammo 1", path: PATH_PAGE.admin_mammography1 },
          { title: "Admin Mammo 2", path: PATH_PAGE.admin_mammography2 },
          { title: "Admin Mammo 3", path: PATH_PAGE.admin_mammography3 },
          {
            title: "Admin Risk Level",
            path: PATH_PAGE.admin_risk_level_prediction,
          },
          {
            title: "Admin Survival Prediction",
            path: PATH_PAGE.admin_survival_prediction,
          },
          {
            title: "For you",
            path: PATH_PAGE.for_you,
          },
        ],
      },
      {
        subheader: "Admin",
        items: [
          { title: "Admin Settings", path: PATH_PAGE.admin_settings },
          {
            title: "Admin User Management",
            path: PATH_PAGE.admin_user_management,
          },
          {
            title: "Admin Knowledge Management",
            path: PATH_PAGE.admin_knowledge_management,
          },
        ],
      },
    ],
  },

  // {
  //   title: "Documentation",
  //   icon: <Iconify icon={"eva:book-open-fill"} {...ICON_SIZE} />,
  //   path: PATH_DOCS,
  // },
];

export default menuConfig;
