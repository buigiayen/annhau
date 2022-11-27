import { Button, Upload } from 'antd'
import { useState } from 'react';
import combine from '../Icon';
import { PostFile } from '../../data/File/index'

const ButtonUpload = (props) => {
  const OK = (value) => {
    if (props.e !== undefined) {
      props.e(value);
    }
  }
  const [FileUpload, SetFileUpload] = useState();
  const [IsSuccess, SetIsSuccess] = useState();
  const Uploads = (info) => {
    var body = { FileRaw: info.file, FileSize: 1021 ,bucket :'avatar'}
    PostFile(body)
      .then((e) => {
        SetIsSuccess(true);
        SetFileUpload(info.file.name)   
        OK(e);  
      })
      .catch((e) => {
        SetIsSuccess(false);
        SetFileUpload('Error')
        OK('Lỗi');  
      })
      
  };

  return (
    <>
      {FileUpload} --
      <Upload
        customRequest={(info) => { Uploads(info) }}
        showUploadList={false}
      >
        <Button>
          <combine.UploadOutlined></combine.UploadOutlined>
          {IsSuccess ? 'Click reupload!' : 'Click Upload File!'}
        </Button>
      </Upload>

    </>

  )
}
export default ButtonUpload;