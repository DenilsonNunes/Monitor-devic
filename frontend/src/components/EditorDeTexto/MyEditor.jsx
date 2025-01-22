// src/components/MyEditor.js
import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const MyEditor = ({initialValue, emAlteracao, onChange}) => {

  const [value, setValue] = useState('');

  useEffect(() => {

    setValue(initialValue);
    
  }, [initialValue])

    // Função para lidar com mudanças no editor
    const handleChange = (content) => {

      setValue(content);
      onChange(content); // Chama a função de callback passada como prop
      
    };




  const modules = {

    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
                                              
    ],
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 
  ];

  return (
    <div>
      <ReactQuill
        value={value} 
        onChange={handleChange}
        modules={modules}
        formats={formats}
        readOnly={emAlteracao}
      />
    </div>
  );
};

export default MyEditor;
