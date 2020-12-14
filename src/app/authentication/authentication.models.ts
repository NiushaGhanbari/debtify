export interface UserModel {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
}

//for future use
export interface UserRole {
  RoleId: number;
  UserId: number;
}