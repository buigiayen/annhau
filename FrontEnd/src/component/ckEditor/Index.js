import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const App = (props) => {
    const OnChangeValue = (value) => {
        if (props.e !== undefined) {
            props.e(value) 
        }
    }


   
    return (
        <div className="App">
            <h2>{props.Title}</h2>
            <CKEditor
                editor={ClassicEditor}
                data={props.Value}
                onChange={(event, editor) => {
                    OnChangeValue(editor.getData());
                }}
            />
            <br></br>
           
        </div>

    );

}

export default App;