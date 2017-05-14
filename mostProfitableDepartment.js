module.exports=function(profDept){
const assert=require('assert');
  var departmentMap={};
  for(var i=0;i<profDept.length;i++){
    var department=profDept[i].department;
    if(departmentMap[department]===undefined){
      departmentMap[department]=0;
    }
    departmentMap[department] = departmentMap[department] + profDept[i].sales;
  }
  console.log(departmentMap);
  var max=0;
  var profitableDept='';

  for(var i=0;i<departmentMap.length;i++){
    if(departmentMap[i].sales > max){
      max=departmentMap[i].sales;
      profitableDept=departmentMap[i].department;
    }
  };
  console.log(profitableDept);
  return profitableDept;
}
