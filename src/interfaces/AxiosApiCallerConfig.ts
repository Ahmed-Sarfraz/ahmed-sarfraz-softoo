type AxiosApiCallerConfig = {
  method?: string;
  url?: string;
  params?: Record<string, any>;
  data?: Record<string, any>;
  contentType?: string;
  Auth?: string | null;
};

export default AxiosApiCallerConfig;
