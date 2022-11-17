
import Home from '../pages/Home'
import DienDan from '../pages/DienDan';
import ViewPost from '../pages/ViewPostDetails';
import Tiket from '../pages/Tiket';
import Home404 from '../pages/404/Index'
import combine from '../component/Icon';
import YeuCauAnNhau from '../pages/YeuCauAnNhau/index'
import  {Index as NoiQuiAnNhau} from '../pages/NoiQuyAnNhau/Index'
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
        componentpages: < YeuCauAnNhau/>,
        Icon: <combine.ExperimentOutlined />,
        IsAuthent: false,
        isShow: true,

    },
    {
        label: 'Nội quy ăn nhậu',
        Link: 'NoiQuyAnNhau',
        componentpages: < NoiQuiAnNhau/>,
        Icon: <combine.SketchOutlined />,
        IsAuthent: false,
        isShow: true,

    },
    {
        label: 'ERR',
        Link: '/:ID/View',
        componentpages: < ViewPost/>,
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