import React, {useState} from 'react';
export const DocumentsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>DOCUMENTS - Documents - CBA PDFs, MOUs, side letters</h2><p>CBA PDFs</p></div>
};
export default DocumentsView;
