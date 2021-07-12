import actionTypes from '../actionTypes';
import { UserEnterpriseVoList } from '../../model/api/getUserInfo';

type userReducerState = {
  enterpriseList: UserEnterpriseVoList[] | Record<any, any>[],
  currentEntId: string
}
const init: userReducerState = {
  enterpriseList: [],
  currentEntId: ''
};
export default (state = init, action) => {
  switch (action.type) {
    case actionTypes.SET_ENTERPRISE:
      const { enterpriseList, currentEntId } = action;
      return {
        ...state,
        enterpriseList,
        currentEntId
      } as userReducerState;
    default:
      return state;
  }
};
