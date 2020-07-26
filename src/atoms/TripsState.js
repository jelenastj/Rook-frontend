import { atom } from "recoil";

export const testState = atom({
    key: "test",
    default: "this is a test"
})