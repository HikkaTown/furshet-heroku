export const scrollToCatalog = () => {
  document
    .querySelector("#catalog")
    .scrollIntoView({ block: "start", behavior: "smooth" });
};
