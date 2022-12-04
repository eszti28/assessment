export interface UsersViewModel {
  id: number;
  first_name: string;
  last_name: string;
  status: {
    values: string;
  };
  created_at: Date;
  updated_at: Date;
}
