import { GET,PUT } from '../index'

export const GETLichAnNhau = async () => {
    return await GET('/v1/LichAnNhau/Lich', null, true);
}
