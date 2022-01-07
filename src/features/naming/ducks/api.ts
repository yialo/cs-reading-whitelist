import type { TNamingSection } from '../types';

export type TNamingApiResponsePayload = {
  data: TNamingSection[];
};

export const fetchNaming = async () => {
  const apiUrl = `${__GLOBAL_ENV_VARIABLE__PUBLIC_PATH__}data/naming.json?${Date.now()}`;

  const response = await fetch(apiUrl);
  return response.json() as Promise<TNamingApiResponsePayload>;
};
