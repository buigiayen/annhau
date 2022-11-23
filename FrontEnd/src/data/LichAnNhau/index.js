import { GET,POST,PUT } from '../index'

export const GETLichAnNhau = async () => {
    return await GET('/v1/LichAnNhau/Lich', null, true);
}
export const PostLichAnNhau = async (body) => {
    return await POST('/v1/LichAnNhau/Lich', body, true);
}

