import {
    ALBUMS_LIST_ROUTER as albums,
    EQUIPMENT_PRICE_LIST_ROUTER  as equipments,
    GUIDES_PRICE_LIST_ROUTER  as guides,
    HOTELS_LIST_ROUTER  as hotels,
    INFOS_LIST_ROUTER  as infoList,
    INSTRUCTORS_PRICE_LIST_ROUTER  as instructors,
    LIFT_PRICE_LIST_ROUTER  as lifts,
    NEWS_LIST_ROUTER  as news,
    PASS_PRICE_LIST_ROUTER  as passes,
    RULES_LIST_ROUTER  as rules,
    SCHEME_COMPLEX_ROUTER  as schemeOfCoplex,
    SCHEME_ROAD_ROUTER  as schemeOfRoad,
    SCHEME_SLOPE_ROUTER  as schemeOfSlope,
    SERVICES_LIST_ROUTER  as serviceList,
    TOUR_PRICE_LIST_ROUTER  as tours,
    WORKING_MODE_ROUTER  as workingMode,
    REVIEWS_LIST_ROUTER  as reviews,
    MAIN_ROUTER  as main,
  } from "../../../shared/consts/routerconsts";
  
 
  const info = [
    {
      link: albums,
      text: "Галлерея",
    },
    {
      link: news,
      text: "Новости",
    },
    {
      link: rules,
      text: "Правила",
    },
    {
      link: schemeOfCoplex,
      text: "Схема комплекса",
    },
    {
      link: schemeOfRoad,
      text: "Схема проезда",
    },
    {
      link: schemeOfSlope,
      text: "Схема склонов",
    },
    {
      link: workingMode,
      text: "Режим работы",
    },
  ];
  const service = [
    {
      link: lifts,
      text: "Подъемники",
    },
    {
      link: equipments,
      text: "Прокат",
    },
    {
      link: tours,
      text: "Туры",
    },
    {
      link: guides,
      text: "Гиды",
    },
    {
      link: instructors,
      text: "Инструкторы",
    },
    {
      link: passes,
      text: "Абонименты",
    },
    {
      link: hotels,
      text: "Гостиницы",
    },
  ];
  const review = [
    {
      link: reviews,
      text: "Услуги",
    }
  ];
  const social = [
    {
      link: '',
      text: "Вконтакте",
    },
    {
      link: '',
      text: "Ютуб",
    },
    {
      link: '',
      text: "Инстаграмм",
    },
    {
      link: '',
      text: "Телеграм",
    },
  ];
  
   export default {infoList, serviceList, info, social, review, service}