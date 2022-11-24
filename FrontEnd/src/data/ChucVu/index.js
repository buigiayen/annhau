import { GET, POST } from '../index'

export const GETchucVu = async () => {
    return await GET('/api/ChucVus/ChucVu', null, false);
}
export const PostLichAnNhau = async (body) => {
    return await POST('/v1/LichAnNhau/Lich', body, true);
}

