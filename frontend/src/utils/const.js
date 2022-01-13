// adminka furshet-zakazat@info.ru
// pass 57211111zZ

export const PREVIEW_L = "preview/large.png";
export const PREVIEW_S = "preview/small.png";

export const URL_HOME = "http:/dsds";
export const SITE_NAME = "Фуршет в офис";

export const PHONE_NUMBER_TEXT = "+7 495 999 99 99";
export const PHONE_NUMBER_LINK = "+74959999999";

export const EMAIL = "furshet-zakazat@info.ru";
export const ADRESS = "г Москва";

export const URL_SERVER = "http://localhost:1337/api";
export const PATH_IMAGES = "http://localhost:1337";

export const URL_BAR_COUNTER = "/bar-counters"; // барные стойки
export const URL_DECOR = "/decors"; // декорации
export const URL_DESINFECTIONS = "/disinfections"; // дезинфекция
export const URL_FAIRY_HOUS = "/fairy-houses"; // сказочный домик
export const URL_FOOD_TRUCK = "/food-trucks"; // фуд трак
export const URL_FURNITURES = "/furnitures"; // мебель
export const URL_STAFS = "/stafs"; // персонал

export const bg_home = {
  desktop: {
    webp: "banners/home/desktop_webp.webp",
    jpg: "banners/home/desktop_jpg.jpg",
  },
  tablet: {
    webp: "banners/home/tablet_webp.webp",
    jpg: "banners/home/tablet_jpg.jpg",
  },
  mobile: {
    webp: "banners/home/mobile_webp.webp",
    jpg: "banners/home/mobile_jpg.jpg",
  },
};

export const bg_stations = {
  desktop: {
    webp: "banners/stations/desktop_webp.webp",
    jpg: "banners/stations/desktop_jpg.jpg",
  },
  tablet: {
    webp: "banners/stations/tablet_webp.webp",
    jpg: "banners/stations/tablet_jpg.jpg",
  },
  mobile: {
    webp: "banners/stations/mobile_webp.webp",
    jpg: "banners/stations/mobile_jpg.jpg",
  },
};

export const bg_masterclass = {
  desktop: {
    webp: "banners/masterclass/desktop_webp.webp",
    jpg: "banners/masterclass/desktop_jpg.jpg",
  },
  tablet: {
    webp: "banners/masterclass/tablet_webp.webp",
    jpg: "banners/masterclass/tablet_jpg.jpg",
  },
  mobile: {
    webp: "banners/masterclass/mobile_webp.webp",
    jpg: "banners/masterclass/mobile_jpg.jpg",
  },
};

export const bg_bar = {
  desktop: {
    webp: "banners/bar/desktop_webp.webp",
    jpg: "banners/bar/desktop_jpg.jpg",
  },
  tablet: {
    webp: "banners/bar/tablet_webp.webp",
    jpg: "banners/bar/tablet_jpg.jpg",
  },
  mobile: {
    webp: "banners/bar/mobile_webp.webp",
    jpg: "banners/bar/mobile_jpg.jpg",
  },
};

export const dataFurshetSlider = [
  {
    src: "furshet_slider/desktop/1.jpg",
    srcTablet: "furshet_slider/tablet/1.jpg",
    srcMobile: "furshet_slider/mobile/1.jpg",
  },
  {
    src: "furshet_slider/desktop/2.jpg",
    srcTablet: "furshet_slider/tablet/2.jpg",
    srcMobile: "furshet_slider/mobile/2.jpg",
  },
  {
    src: "furshet_slider/desktop/3.jpg",
    srcTablet: "furshet_slider/tablet/3.jpg",
    srcMobile: "furshet_slider/mobile/3.jpg",
  },
  {
    src: "furshet_slider/desktop/4.jpg",
    srcTablet: "furshet_slider/tablet/4.jpg",
    srcMobile: "furshet_slider/mobile/4.jpg",
  },
];

export const dataFurshetText = {
  header: "Фуршет с обслуживанием",
  title:
    "Создаем фуршетную линию, полностью организуем ваше мероприятие с накрытием на стол, декором и официантами",
  callback: () => {
    console.log("open modal feedback");
  },
};

export const dataStationsSlider = [
  {
    src: "stations_slider/desktop/1.jpg",
    srcTablet: "stations_slider/tablet/1.jpg",
    srcMobile: "stations_slider/mobile/1.jpg",
  },
  {
    src: "stations_slider/desktop/2.jpg",
    srcTablet: "stations_slider/tablet/2.jpg",
    srcMobile: "stations_slider/mobile/2.jpg",
  },
  {
    src: "stations_slider/desktop/3.jpg",
    srcTablet: "stations_slider/tablet/3.jpg",
    srcMobile: "stations_slider/mobile/3.jpg",
  },
];

export const dataStationsText = {
  header: "Гастрономические станциина ваше мероприятие",
  title:
    "Пирамида из шампанского, интерактивный велошейкер, раклет бар прямо у вас в офисе!",
  callback: (router) => {
    router.push("/stations");
  },
};
