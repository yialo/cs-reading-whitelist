type TNamingItem = {
  title: string;
  names: string[];
};

export type TNamingSection = {
  id: string;
  title: string;
  items: TNamingItem[];
};
