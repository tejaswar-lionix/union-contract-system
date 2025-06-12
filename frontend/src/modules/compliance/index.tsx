import React, {useState} from 'react';
export const ComplianceView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>COMPLIANCE - Compliance - contract violations, flags,</h2><p>violations</p></div>
};
export default ComplianceView;
