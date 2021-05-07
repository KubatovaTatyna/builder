import { ADD_POT, REMOVE_POT } from "./types";

export const add = (pot) => ({
    type: ADD_POT ,  pot:pot
});
export const remove = (pot) => ({
    type: REMOVE_POT , pot:pot
})