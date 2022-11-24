import {GET, POST} from '../index'

export const ListThanhVien = async () => {return await GET('/v1/Person/ThanhVien', null, true)}
export const ThanhVienFind = async (Params) => {return await GET('/v1/Person/ThanhVien', null, true, Params)}
export const PostThanhVien = async (body) => { return await POST('/v1/Person/ThanhVien', body, true)}