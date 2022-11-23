import React, { Component, useState } from 'react';
import { Button } from 'antd';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { PUTNoiQuy as PutNQ } from '../../data/NoiQuy/NoiQuy';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const App = (props) => {
    const [data, SetValueData] = useState();
    const PutNoiQuy = async () => {
       await PutNQ({NoiDung:data, NgayBanHanh : new Date()});
    }
    return (
        <div className="App">
            <h2>{props.Title}</h2>
            <CKEditor
                editor={ClassicEditor}
                data={props.Value}
                onReady={editor => {
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    SetValueData(editor.getData());
                }}
            />
            <br></br>
            <Button onClick={PutNoiQuy}>Save</Button>
        </div>
        
    );

}

export default App;