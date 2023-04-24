// routes
import { PATH_PAGE } from "../../../routes/paths";
// components
import SvgIconStyle from "../../../components/SvgIconStyle";
import Badge from "@mui/material/Badge";

// ----------------------------------------------------------------------

const getIcon = (name) => (
  <SvgIconStyle
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const ICONS = {
  blog: getIcon("ic_blog"),
  cart: getIcon("ic_cart"),
  chat: getIcon("ic_chat"),
  mail: getIcon("ic_mail"),
  user: getIcon("ic_user"),
  kanban: getIcon("ic_kanban"),
  banking: getIcon("ic_banking"),
  booking: getIcon("ic_booking"),
  invoice: getIcon("ic_invoice"),
  calendar: getIcon("ic_calendar"),
  ecommerce: getIcon("ic_ecommerce"),
  analytics: getIcon("ic_analytics"),
  dashboard: getIcon("ic_dashboard"),
  menuItem: getIcon("ic_menu_item"),
};
// Use this to admin => doctor
// const navConfig = [
//   // GENERAL
//   // ----------------------------------------------------------------------
//   {
//     subheader: "general",
//     items: [
//       {
//         title: "For You",
//         path: PATH_PAGE.for_you,
//         icon: ICONS.invoice,
//       },
//       {
//         title: "Risk Prediction",
//         path: PATH_PAGE.admin_risk_level_prediction,
//         icon: ICONS.kanban,
//       },
//       {
//         title: "mammography prediction",
//         path: PATH_PAGE.admin_mammography1,
//         icon: ICONS.analytics,
//       },
//       {
//         title: "survival prediction",
//         path: PATH_PAGE.admin_survival_prediction,
//         icon: ICONS.ecommerce,
//       },
//       {
//         title: "settings",
//         path: PATH_DASHBOARD.general.banking,
//         icon: ICONS.banking,
//       },
//       {
//         title: "sign-out",
//         path: PATH_DASHBOARD.general.booking,
//         icon: ICONS.booking,
//       },
//     ],
//   },
// ];

// Use this to admin => user
const navConfig = [
  {
    subheader: "general",
    items: [
      {
        title: "User management",
        path: PATH_PAGE.admin_user_management,
        icon: ICONS.user,
      },
      {
        title: "Knowledge management", // <Badge badgeContent={4} color="secondary"/>
        path: PATH_PAGE.admin_knowledge_management,
        icon: ICONS.invoice,
      },
      {
        title: "Settings",
        path: PATH_PAGE.admin_settings,
        icon: ICONS.banking,
      },
      {
        title: "Sign out",
        path: PATH_PAGE.admin_settings,
        icon: ICONS.booking,
      },
    ],
  },
];

export default navConfig;
