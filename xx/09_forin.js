/*
var person={
  name:'tom',
  age:18,
  sex:'男'
};

for(var key in person){
  //key属性名
  console.log(key,person[key]);
}
*/

var student={
  chinese:90,
  math:100,
  englist:95,
  history:89
};
//遍历对象，获取每一个成绩
var sum=0;
for(var key in student){
  //console.log(key,student[key]);
  //把每一个属性值加到sum中
  sum+=student[key];
}
console.log(sum);








