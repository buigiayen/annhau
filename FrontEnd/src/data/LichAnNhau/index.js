import { GET,POST,DELETE } from '../index'

export const GETLichAnNhau = async (pramas) => {
    return await GET('/v1/LichAnNhau/Lich', null, true,pramas);
}
export const PostLichAnNhau = async (body) => {
    return await POST('/v1/LichAnNhau/Lich', body, true);
}
export const DELETENoiQuy = async (body) => {
    return await DELETE('/v1/LichAnNhau/Lich', body);
}

