
export interface Account {
  name: string;
  email: string;
  nickname: string;
  createdAt: Date;
  librariesCount: number;
  country: {
    urlFlag: string;
  }
}
