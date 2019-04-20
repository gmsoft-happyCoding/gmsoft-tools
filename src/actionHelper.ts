/**
 * @module actionHelper
 */

import { bindActionCreators, compose, ActionCreatorsMapObject, Dispatch } from 'redux';
import { keys, head } from 'lodash';
import { ActionFunctionAny, Action } from 'redux-actions';

/**
 * @private
 */
const postfix = 'BoundActions';

export interface NamespaceActions {
  [namespace: string]: ActionCreatorsMapObject | ActionFunctionAny<Action<any>>;
}

// for compatible redux-actions's error type declaration, declaration actions can be any
interface BindActions {
  (actions: NamespaceActions | any, dispatch: Dispatch): NamespaceActions;
}

/**
 * 遍历 actions, bind action with dispatch
 * @private
 */
const bindActions: BindActions = (actions, dispatch) => {
  const namespace = compose<string>(
    head,
    keys
  )(actions);
  const boundActions = bindActionCreators(actions[namespace], dispatch);
  return { [namespace + postfix]: { ...boundActions } };
};

// for compatible redux-actions's error type declaration, declaration return any
interface BindActionsCollection {
  (...actionsCollection: NamespaceActions[]): (dispatch: Dispatch) => any;
}

/**
 * @function bindActions
 * bind has namespace actions (one level)
 * @param  {...object} actionsCollection - action creator object, Usually created by createActions
 * @return {function} dispatch -> object, object key is [namespace + postfix]
 *
 * @example
 * param:
 * const counterActions = createActions({
 *  counter: {
 *    add: identity,
 *    minus: identity
 *  }
 * });
 *
 * return:
 *  // every action creator wrapped into a dispatch call so they may be invoked directly.
 *  counterBoundActions: {
 *    add,
 *    minus
 *  }
 * });
 */
export const bindActionsCollection: BindActionsCollection = (...actionsCollection) => dispatch => {
  const boundActionsCollection = actionsCollection.reduce(
    (boundActions, actions) => ({
      ...boundActions,
      ...bindActions(actions, dispatch),
    }),
    {}
  );
  return { ...boundActionsCollection, dispatch };
};

type Actions = {
  [actionName: string]: ActionFunctionAny<Action<any>>;
};

/**
 * @param {NamespaceActions} actions - { namespace: Actions }
 * @return {Actions}
 */
export function unwrap(actions: NamespaceActions): Actions {
  return Object.values(actions)[0] as Actions;
}
