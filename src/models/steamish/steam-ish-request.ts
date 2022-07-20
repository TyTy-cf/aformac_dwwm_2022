
export interface SteamIshRequest<T> {
  items: Array<T>;
  itemsPerPage: number;
  page: number;
  total: number;
  totalPages: number;
}

