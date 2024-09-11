type DeviceCountConfig = {
  initialCount: number;
  incrementCount: number;
};
type LazyCount = {
  MOBILE: DeviceCountConfig;
  TABLET: DeviceCountConfig;
  DESKTOP: DeviceCountConfig;
};

// Define the constant with explicit type annotation
const LAZYCOUNT: LazyCount = {
  MOBILE: {
    initialCount: 5,
    incrementCount: 5,
  },
  TABLET: {
    initialCount: 10,
    incrementCount: 10,
  },
  DESKTOP: {
    initialCount: 15,
    incrementCount: 15,
  },
};

export { LAZYCOUNT };
