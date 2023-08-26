import React from 'react';
import './BasicDropzone.css'
import {useDropzone} from 'react-dropzone';

export default function BasicDropzone(props) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  acceptedFiles.forEach(file => {
    props.files.length = 0
    props.files.push(file)
  });

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <>
        <section className='basic-dropzone'>
        <div {...getRootProps({className: 'dropzone'})}>
            <input {...getInputProps()} />
            <p>Arraste ou solte arquivos aqui, ou clique para selecionar os arquivos</p>
        </div>
        </section>
        <aside>
            <h4>Files</h4>
            <ul>{files}</ul>
        </aside>
    </>
  );
}