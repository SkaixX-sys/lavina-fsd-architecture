import {
  SERVICES_LIST_ROUTER as servicelist,
  INFOS_LIST_ROUTER as infolist,
  REVIEWS_LIST_ROUTER as reviewlist,
  LOGIN_ROUTER as login,
  REGISTRATION_ROUTER as registration,
  MAIN_ROUTER as main,
} from "../../../shared/consts/routerconsts";

const nav = [
  {
    link: servicelist,
    text: "Услуги",
  },
  {
    link: infolist,
    text: "Информация",
  },
  {
    link: reviewlist,
    text: "Отзывы",
  },
];

 export default {nav, login, registration, main}