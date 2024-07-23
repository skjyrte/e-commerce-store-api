const processVariants = (variants: string) => {
  //NOTE - query syntax: brand_color__size
  const brand: string[] = [];
  const color: string[] = [];
  const size: string[] = [];

  const pushBrand = (variants: string) => {
    let i = 0;
    let brandString = "";
    while (i < variants.length) {
      if (variants[i] !== "_" && variants[i] !== "__") {
        brandString += variants[i];
      } else break;
      i++;
    }
    brandString.split(".").forEach((b) => {
      if (b !== "") {
        brand.push(b);
      }
    });
  };

  const pushColor = (variants: string) => {
    if (variants.includes("_")) {
      if (variants.includes("__")) {
        variants
          .slice(variants.indexOf("_") + 1, variants.indexOf("__"))
          .split(".")
          .forEach((c) => {
            if (c !== "") {
              color.push(c);
            }
          });
      } else {
        variants
          .slice(variants.indexOf("_") + 1)
          .split(".")
          .forEach((c) => {
            if (c !== "") {
              color.push(c);
            }
          });
      }
    }
  };

  const pushSize = (variants: string) => {
    if (variants.includes("__")) {
      variants
        .slice(variants.indexOf("__size-") + 7)
        .split(".")
        .forEach((s) => size.push(s));
    }
  };

  pushBrand(variants);
  pushColor(variants);
  pushSize(variants);

  console.log({brandsArray: brand, colorsArray: color, sizesArray: size});
  return {brandsArray: brand, colorsArray: color, sizesArray: size};
};
export default processVariants;
