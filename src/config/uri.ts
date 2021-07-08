let BASE_URL = '';
let HZZK_FT_API = '';
let HZZK_ARC_API = '';
let HZZK_OCR_API = '';
let PERMISSION_API = '';
export type IUrls = {
  BASE_URL: string,
  HZZK_FT_API: string,
  HZZK_ARC_API: string,
  HZZK_OCR_API: string,
  PERMISSION_API: string
}
// process.env.NODE_ENV
switch (process.env.NODE_ENV) {
  case 'development':
    PERMISSION_API = 'https://test.archlioner.com';
    BASE_URL = 'https://test.archlioner.com/hzzk-portal';
    HZZK_FT_API = 'https://test.archlioner.com/hzzk-ft';
    HZZK_ARC_API = 'https://test.archlioner.com/hzzk-arc';
    HZZK_OCR_API = 'http://test.archlioner.com/hzzk-ocr';
    break;
  case 'test':
    PERMISSION_API = 'https://test.archlioner.com';
    BASE_URL = 'https://test.archlioner.com/hzzk-portal';
    HZZK_FT_API = 'https://test.archlioner.com/hzzk-ft';
    HZZK_ARC_API = 'https://test.archlioner.com/hzzk-arc';
    HZZK_OCR_API = 'http://test.archlioner.com/hzzk-ocr';
    break;
  case 'production':
    PERMISSION_API = 'https://hzzk.archlioner.com';
    BASE_URL = 'https://hzzk.archlioner.com/hzzk-portal';
    HZZK_FT_API = 'https://hzzk.archlioner.com/hzzk-ft';
    HZZK_ARC_API = 'https://hzzk.archlioner.com/hzzk-arc';
    HZZK_OCR_API = 'http://hzzk.archlioner.com/hzzk-ocr';
    break;
}
const urls: IUrls = {
  BASE_URL,
  HZZK_FT_API,
  HZZK_ARC_API,
  HZZK_OCR_API,
  PERMISSION_API
};
export default urls;
