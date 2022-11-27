import { GET,PUT, DELETE } from '../index'

export const GETNoiQuy = async () => {
    return await GET('/v1/NoiQuis/NoiQui', null, true);
}
export const PUTNoiQuy = async (body) => {
    return await PUT('/v1/NoiQuis/NoiQui', body);
}
