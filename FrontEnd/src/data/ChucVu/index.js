import { GET, POST } from '../index'

export const GETchucVu = async () => {
    return await GET('/v1/ChucVus/ChucVu', null, false);
}

