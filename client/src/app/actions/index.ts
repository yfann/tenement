import * as API from '../api/tenement';

export const ADD_TENEMENTITEM='ADD_TENEMENTITEM';
export const DEL_TENEMENTITEM='DEL_TENEMENTITEM';
export const GET_ALL_TENEMENTITEMS='GET_ALL_TENEMENTITEMS';
export const UPDATE_TENEMENTITEM='UPDATE_TENEMENTITEM';

export function addTenementItem(tenementItem) {
    return {
        type:ADD_TENEMENTITEM,
        tenementItem
    };
}