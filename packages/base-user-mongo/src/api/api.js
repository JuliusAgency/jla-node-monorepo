"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 *
 * @param Model Wrapper for native Db API
 * @returns
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.dBApi = void 0;
const dBApi = (Model) => {
    const findOne = async (options) => {
        return await Model.findOne(options);
    };
    const deleteOne = async (row) => {
        await Model.deleteOne(row);
    };
    // { "name": "", "email": "", "password": "[encrypted]" }
    const save = async (userObj) => {
        const newUser = new Model(userObj);
        return await newUser.save();
    };
    const findById = async (options) => {
        const pkn = getPrimaryKeyName();
        return await Model.findById({ [pkn]: options[pkn] });
    };
    const findOneAndUpdate = async (filter, update, flags) => {
        return await Model.findOneAndUpdate(filter, update, flags);
    };
    const getPrimaryKeyName = () => {
        return '_id';
    };
    return {
        findById,
        findOne,
        findOneAndUpdate,
        deleteOne,
        save,
        getPrimaryKeyName,
    };
};
exports.dBApi = dBApi;
