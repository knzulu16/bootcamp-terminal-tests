var countAllFromTown=require('../countAllFromTown');

function countAllFromTown(regNumber){
  var fromStellies=regNumber.split(',');
  console.log(fromStellies);
  var count=[];

  for(var i=0;i<fromStellies.length;i++){

    if(fromStellies[i].startsWith('CL')){
    count.push(fromStellies[i]);

}
  }
  return count.length;
}
