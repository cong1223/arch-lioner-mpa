export interface IGetProjectListParams {
  pageNum: number,
  pageSize: number,
  keyword?: string,
  isCreator?: boolean,
  enterpriseId: string
}

export interface IProjectItem {
  address?: any;
  cooOrg?: any;
  createBy?: any;
  description?: any;
  designNum?: any;
  development?: any;
  enterpriseId: string;
  enterpriseName?: any;
  id: string;
  isFav: string;
  isWaitSign?: any;
  name: string;
  permissionSwitch: string;
  proType: string;
  scale?: any;
  simpleName: string;
  totalFileSizeStr?: any;
  type: string;
  updateTime: number;
  year: string;
}

export interface IProjectPageInfo {
  endRow: number;
  firstPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  lastPage: number;
  list: IProjectItem[];
  navigatePages: number;
  navigatepageNums: number[];
  nextPage: number;
  orderBy?: any;
  pageNum: number;
  pageSize: number;
  pages: number;
  prePage: number;
  size: number;
  startRow: number;
  total: number;
}

export interface IPageInfo {
  pageInfo: IProjectPageInfo
}
