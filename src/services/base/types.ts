export interface Header {
  date: string;
  contentType: string;
  contentLength: string;
  connection: string;
  vary: string;
  accessControlAllowMethods: string;
  setCookie: string;
}

export interface TaroResponse<R> {
  data: Result<R>;
  header: Header;
  statusCode: number;
  cookies: string[];
  errMsg: string;
}

export interface Result<R> {
  code: number;
  message: string;
  result: R;
  success: boolean;
  timestamp: number;
}
