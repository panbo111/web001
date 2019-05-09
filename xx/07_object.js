//使用对象字面量创建对象
var phone={
  color:'black',
  brand:'huawei',
  size:6.5,
  madeIn:'china'
};
//console.log(phone);
//练习: 创建一个人对象，添加姓名、性别、年龄
var person={
  name:'tom',
  sex:'男',
  age:21
};
//console.log(person);
//练习：创建一个员工对象，包含编号、姓名、性别、生日、工资、所属部门编号
var emp={
  eid:1,
  ename:'jerry',
  sex:0,
  birthday:'1997-3-2',
  salary:8000,
  'dept-id':20
};
//console.log(emp);
//访问对象中属性，获取对象中的属性值
//console.log( emp.ename );
//console.log( emp['dept-id'] );
//访问不存在的属性返回undefined
//console.log( emp.size );
//修改对象中的属性值
//emp.salary=10000;
//emp['birthday']='2000-1-1';
//添加不存在的属性
//emp.country='china';
//console.log(emp);
//练习：创建一个电脑对象，包含的属性有屏幕尺寸，品牌，颜色，内存大小；获取品牌的属性值，修改颜色的属性值，添加产地属性。
var laptop={
  size:15.5,
  brand:'戴尔',
  color:'red',
  memory:'8G'
};
console.log( laptop.brand );
laptop['color']='white';
laptop.madeIn='china';
console.log(laptop);






