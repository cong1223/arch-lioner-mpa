/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import Taro from '@tarojs/taro';

export type IconNames = 'Uniquely1' | 'QRcode' | 'Recognitionarea' | 'default' | 'folder-publishing' | 'DWFPDF' | 'print-shop' | 'Related' | 'rely' | 'Subtasks' | 'alipay' | 'wechat-pay' | 'hook' | 'close' | 'folder-settings' | 'move' | 'mac' | 'win' | 'Wechat' | 'label' | 'Info' | 'notCloud' | 'download1' | 'company' | 'inbox1' | 'common' | 'file-management' | 'duty' | 'organizationalStr1' | 'statistics' | 'major' | 'my-loan' | 'my-application' | 'to-do-list' | 'person2' | 'shortcut' | 'settings' | 'full-screen' | 'Zoomout' | 'Zoom-in' | 'spin' | 'list' | 'frame-template' | 'customize' | 'log-in' | 'drawing' | 'personnel-signatureRegistrationSeal1' | 'drawing1' | 'export' | 'error' | 'template' | 'import' | 'customize1' | 'minimize-pc' | 'close-pc' | 'web1' | 'addressList' | 'approved' | 'announcements' | 'inbox' | 'myApproval' | 'Operating' | 'finance' | 'archivesCenter' | 'projectCenter' | 'bidding' | 'wallet' | 'workbench' | 'organizationalStr' | 'synchronous-tray' | 'Calendar' | 'CheckCircle' | 'CheckSmallforCheckbox' | 'Check' | 'eye-hide' | 'email' | 'eye' | 'minus-square' | 'phone' | 'filter1' | 'search' | 'remove-round' | 'user' | 'drag-rows1' | 'person' | 'archive' | 'arrowsalt' | 'back' | 'add' | 'client' | 'Confidentiality' | 'code' | 'collection-pre' | 'copy' | 'edit' | 'contract' | 'favorites' | 'drag-rows' | 'download' | 'customer-service' | 'flag' | 'filter' | 'folder-add' | 'locking' | 'folder' | 'more-horizontal' | 'menu' | 'more-vertical' | 'message' | 'operation-record' | 'new-favorite' | 'pause' | 'play' | 'print' | 'rename' | 'save' | 'record' | 'refresh' | 'quit' | 'shrink' | 'share' | 'synchronize' | 'signature' | 'tag' | 'trash' | 'tender' | 'upload' | 'web' | 'transfer' | 'window' | 'work-package' | 'Right' | 'left' | 'down1' | 'right' | 'top' | 'left1' | 'up1' | 'right1' | 'down2' | 'down' | 'Left' | 'up';

interface Props {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

const IconFont: FunctionComponent<Props> = (props) => {
  const { name, size, color, style } = props;

  // @ts-ignore
  return <iconfont name={name} size={parseFloat(Taro.pxTransform(size))} color={color} style={style} />;
};

IconFont.defaultProps = {
  size: 18,
};

export default IconFont;
