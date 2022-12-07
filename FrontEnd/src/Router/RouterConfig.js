
import Home from '../pages/Home'
import DienDan from '../pages/DienDan';
import ViewPost from '../pages/ViewPostDetails';
import Tiket from '../pages/Tiket';
import Home404 from '../pages/404/Index'
import HomeBaoTri from '../pages/BaoTri/index'
import combine from '../component/Icon';
import YeuCauAnNhau from '../pages/YeuCauAnNhau/index'
import ThuChiNhom from '../pages/ThuChiNhom/index'
import { Index as NoiQuiAnNhau } from '../pages/NoiQuyAnNhau/Index'
import XacNhanAnNhau from '../pages/XacNhanAnNhau/index'
export const ConfigRouter = () => [
    {
        label: 'Danh sách thành viên ăn nhậu',
        Link: '/',
        componentpages: <DienDan />,
        Icon: <combine.HomeOutlined />,
        IsAuthent: true,
        isShow: true,

    },

    {
        label: 'Lịch ăn nhậu',
        Link: 'YeuCauAnNhau',
        componentpages: < YeuCauAnNhau />,
        Icon: <combine.ExperimentOutlined />,
        IsAuthent: false,
        isShow: true,

    },
    {
        label: 'Nội quy ăn nhậu',
        Link: 'NoiQuyAnNhau',
        componentpages: < NoiQuiAnNhau />,
        Icon: <combine.SketchOutlined />,
        IsAuthent: false,
        isShow: true,

    },
    {
        label: 'Thu chi nhóm',
        Link: 'ThuChiNhom',
        componentpages: < ThuChiNhom />,
        Icon: <combine.ExceptionOutlined />,
        IsAuthent: false,
        isShow: true,

    },
    {
        label: 'Rank',
        Link: 'Rank',
        componentpages: < HomeBaoTri />,
        Icon: <combine.ExceptionOutlined />,
        IsAuthent: false,
        isShow: true,

    },
    {
        label: 'ERR',
        Link: '/:ID/View',
        componentpages: < ViewPost />,
        Icon: <combine.HomeOutlined />,
        IsAuthent: false,
        isShow: false,

    },
    {
        label: 'Confirm',
        Link: '/Confirm/:Token/:IDPOST',
        componentpages: < XacNhanAnNhau />,
        Icon: <combine.HomeOutlined />,
        IsAuthent: false,
        isShow: false,

    },
    {
        label: 'ERR',
        Link: '*',
        componentpages: <Home404 />,
        Icon: <combine.HomeOutlined />,
        IsAuthent: false,
        isShow: false,

    }
]


export default ConfigRouter;