import {ActionType, ContentStateInterface} from '../Contexts/RtcContext';

export default function UserBanned(
  state: ContentStateInterface,
  action: ActionType<'UserBanned'>,
) {
  return {
    ...state,
    isUserBaned: action?.value[0] || false,
  };
}
