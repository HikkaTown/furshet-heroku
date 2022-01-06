export interface LazyImageProps {
    src: string;
    srcWebp?: string;
    srcTablet?: string;
    srcTabletWebp?: string;
    srcMobile?: string;
    srcMobileWebp?: string;
    alt: string;
    className?: string;
    itemprop?: string;
    width?: string;
    height?: string;
    server?: boolean;
    onClick?: () => void;
    isNoscript?: boolean;
    type?: string;
    lazy?: boolean;
}

export interface LazyImageWrapperProps extends LazyImageProps {
    ratio: number;
    wrapperClass?: string;
}
