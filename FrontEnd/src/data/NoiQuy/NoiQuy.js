import { GET } from '../index'

export const GETNoiQuy = async () => {
    return await GET('/v1/NoiQuis/NoiQui', null, true);
}