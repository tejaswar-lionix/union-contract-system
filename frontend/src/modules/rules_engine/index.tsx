import React, {useState} from 'react';
export const Rules_engineView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>RULES_ENGINE - Rules Engine - contract rules, violation</h2><p>violation detection</p></div>
};
export default Rules_engineView;
