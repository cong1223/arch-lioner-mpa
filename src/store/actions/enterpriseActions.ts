import actionTypes from '../actionTypes';
import { UserEnterpriseVoList, UserInfo } from '../../model/api/getUserInfo';

const setEnterprise: any = (enterpriseList: UserEnterpriseVoList[]) => {
  return (dispatch, getState) => {
    const userInfo: UserInfo = getState().user.userInfo;
    const currentEntId: string =userInfo.curEnterpriseId;
    dispatch({
      type: actionTypes.SET_ENTERPRISE,
      enterpriseList,
      currentEntId
    });
  };
};

export { setEnterprise };
