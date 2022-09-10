import { useEffect, useReducer } from "react";
import cleanContext from "./clean-context";

import Services from "./../assets/urbanExpertCleaning-common.json";

const initialData = {
  faq: [],
  reviews: [],
  carouselImages: [],
};

const cleanReducer = (state, action) => {
  if (action.type === "SERVICE") {
    return {
      ...state,
      faq: action.payload.faq,
      reviews: action.payload.reviews,
      carouselImages: action.payload.carousel,
    };
  }
  return initialData;
};

const CleanContextProvicer = (props) => {
  const [cleaningData, dispathcCleaningData] = useReducer(
    cleanReducer,
    initialData
  );

  const extractJSON = () => {
    const services = Services[0];
    dispathcCleaningData({ type: "SERVICE", payload: services });
  };

  useEffect(() => {
    extractJSON();
  }, []);

  const cleanContextData = {
    faq: cleaningData.faq,
    reviews: cleaningData.reviews,
    carouselImages: cleaningData.carouselImages,
  };
  return (
    <cleanContext.Provider value={cleanContextData}>
      {props.children}
    </cleanContext.Provider>
  );
};

export default CleanContextProvicer;
