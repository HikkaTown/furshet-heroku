export const MOBILE = 767;
export const TABLET = 1175;
export const DESKTOP = 1419;

export const MEDIA = {
  MOBILE: `(max-width: ${MOBILE}px)`,
  TABLET: `(max-width: ${TABLET}px)`,
  DESKTOP: `(min-width: ${TABLET + 1}px)`,
};

export const MIN_MEDIA = {
  TABLET: `(min-width: ${MOBILE + 1}px)`,
  DESKTOP: `(min-width: ${TABLET + 1}px)`,
};
