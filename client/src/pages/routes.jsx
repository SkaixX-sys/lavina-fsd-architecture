import {
  ADMIN_ROUTER,
  ALBUMS_LIST_ROUTER,
  ALBUM_PAGE_ROUTER,
  EQUIPMENT_PRICE_LIST_ROUTER,
  GUIDES_PRICE_LIST_ROUTER,
  HOTELS_LIST_ROUTER,
  HOTEL_PAGE_ROUTER,
  INFOS_LIST_ROUTER,
  INSTRUCTORS_PRICE_LIST_ROUTER,
  LIFT_PRICE_LIST_ROUTER,
  LOGIN_ROUTER,
  NEWS_LIST_ROUTER,
  PASS_PRICE_LIST_ROUTER,
  REGISTRATION_ROUTER,
//   ROOM_PAGE_ROUTER,
  RULES_LIST_ROUTER,
  SCHEME_COMPLEX_ROUTER,
  SCHEME_ROAD_ROUTER,
  SCHEME_SLOPE_ROUTER,
  SERVICES_LIST_ROUTER,
  TOUR_PRICE_LIST_ROUTER,
  WORKING_MODE_ROUTER,
} from "./consts";
import Auth from "./Auth/Auth";
import Admin from "./Admin/Admin";
import AlbumList from "./AlbumList/AlbumList";
import ToursPrice from "./Tours/ToursPrice";
import LiftsPrice from "./LiftPrice/LiftsPrice";
import EquipmentPrice from "./EquipmentPrice/EquipmentPrice";
import HotelList from "./HotelList/HotelList";
import HotelPage from "./HotelPage/HotelPage";
// import RoomPage from "./../../pages/RoomPage/RoomPage";
import InstructorPrice from "./InstructorPrice/InstructorPrice";
import GuidePrice from "./GuidePrice/GuidePrice";
import PassPrice from "./PassPrice/PassPrice";
import NewsList from "./NewsList/NewsList";
import RulesList from "./RulesList/RulesList";
import SchemeRoad from "./SchemeRoad/SchemeRoad";
import SchemeComplex from "./SchemeComplex/SchemeComplex";
import SchemeSlope from "./SchemeSlope/SchemeSlope";
import WorkingMode from "./WorkingMode/WorkingMode";
import AlbumPage from "./AlbumPage/AlbumPage";
import ServiceList from "./ServiceList/ServiceList";
import InfoList from "./InfoList/InfoList";

export const notAuthRoutes = [
  {
    path: REGISTRATION_ROUTER,
    Component: Auth,
  },
  {
    path: LOGIN_ROUTER,
    Component: Auth,
  },
];

export const adminRoutes = [
  {
    path: ADMIN_ROUTER,
    Component: Admin,
  },
];
export const publicRoutes = [
  {
    path: ALBUMS_LIST_ROUTER,
    Component: AlbumList,
  },
  {
    path: SERVICES_LIST_ROUTER,
    Component: ServiceList,
  },
  {
    path: INFOS_LIST_ROUTER,
    Component: InfoList,
  },
  {
    path: TOUR_PRICE_LIST_ROUTER,
    Component: ToursPrice,
  },
  {
    path: LIFT_PRICE_LIST_ROUTER,
    Component: LiftsPrice,
  },
  {
    path: EQUIPMENT_PRICE_LIST_ROUTER,
    Component: EquipmentPrice,
  },
  {
    path: HOTELS_LIST_ROUTER,
    Component: HotelList,
  },
  {
    path: HOTEL_PAGE_ROUTER + "/:type",
    Component: HotelPage,
  },
//   {
//     path: ROOM_PAGE_ROUTER + "/:id",
//     Component: RoomPage,
//   },
  {
    path: INSTRUCTORS_PRICE_LIST_ROUTER,
    Component: InstructorPrice,
  },
  {
    path: GUIDES_PRICE_LIST_ROUTER,
    Component: GuidePrice,
  },
  {
    path: PASS_PRICE_LIST_ROUTER,
    Component: PassPrice,
  },
  {
    path: NEWS_LIST_ROUTER,
    Component: NewsList,
  },
  {
    path: RULES_LIST_ROUTER,
    Component: RulesList,
  },
  {
    path: SCHEME_ROAD_ROUTER,
    Component: SchemeRoad,
  },
  {
    path: SCHEME_COMPLEX_ROUTER,
    Component: SchemeComplex,
  },
  {
    path: SCHEME_SLOPE_ROUTER,
    Component: SchemeSlope,
  },
  {
    path: WORKING_MODE_ROUTER,
    Component: WorkingMode,
  },
  {
    path: ALBUMS_LIST_ROUTER,
    Component: AlbumList,
  },
  {
    path: ALBUM_PAGE_ROUTER + "/:id",
    Component: AlbumPage,
  },
];
