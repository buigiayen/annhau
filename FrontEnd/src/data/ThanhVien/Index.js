import {GET} from '../index'

export const ListThanhVien = async () => {return await GET('/v1/Person/ThanhVien', null, true)}