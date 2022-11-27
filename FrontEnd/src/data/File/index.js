import { GET,POST,Upload } from '../index'

export const GETFile = async () => {
    return await GET('/v1/fileAction/File', null, true);
}
export const PostFile = async (body) => {
    return await Upload('/v1/fileAction/File', body, true);
}

