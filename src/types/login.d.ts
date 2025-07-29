/* eslint-disable @typescript-eslint/no-explicit-any */
 
export interface IAccount{
    name:string,
    password:string
}

export interface IUserInfo{
    id: number;
    name: string;
    realname: string;
    cellphone: number;
    enable: number;
    createAt: string;
    updateAt: string;
    role: Role;
    department: Department;
}

export interface Department {
  id: number;
  name: string;
  parentId: number;
  createAt: string;
  updateAt: string;
  leader: string;
}

export interface Role {
  id: number;
  name: string;
  intro: string;
  createAt: string;
  updateAt: string;
}

export interface ILoginState{
  token:string,
  userInfo:IUserInfo,
  userMenus:any,
}