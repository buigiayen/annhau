import {GET} from '../index'

export const ListThanhVien = async () => {return await GET('/v1/Person/ThanhVien', null, true)}
export const ThanhVienFind = async (Params) => {return await GET('/v1/Person/ThanhVien', null, true, Params)}