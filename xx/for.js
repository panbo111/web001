

// //1��һ��0.0001�׵�ֽ�����۶��ٴο��Դﵽ8848�ף�
// for(var i=10;i<20;i++){
//     for(var j=1;j<10;j++){
        
//     }
//     console.log(j)
// }

//console.log(j)
// /*
// for(i=0.0001,x=1;;){
//     i=i*2;    
//     if(i>=8848){
//         break;
//     }
//     x+=1;
// }
// console.log(x)
// */
// //��������Ӽ����ţ�ʹ��ʽ�������м��������(���԰ѼӼ�����ת���ɼ�+1��-1   
// //����12-34���� 12+��-1*34��)  12+34���� 12+��1*34��)

// //12()34()56()78()9=59
 

// 
// for(var i=-1;i<2;i=i+2){
//     for(var j=-1;j<2;j=j+2){
//         for (var k=-1;k<2;k=k+2){
//             for(var p=-1;p<2;p=p+2){
//                 if(12+i*34+j*56+k*78+p*9==59){
//                     console.log(i+"|"+j+"|"+k+"|"+p);
//                     //��ӡ���� ���������м���  �����оٳ���
//                 }
//             }
//         }
//     }
// }



// //��ë����15Ԫ����3Ԫ��ˮ2Ԫ��200Ԫÿ������һ�����ж��ٿ���
// //�ܹ�200Ԫ ���� ֻ�ܵ���13����ë�� ��66����  �� 100ƿˮ

// for(var i=1,x=0;i<=13;i++){
//     for(var j=1;j<=66;j++){
//         for(var k=1;k<=100;k++){
//             if(i*15+j*3+k*2==200){
//                 x++;
//             }
//         }
//     }
// }
// console.log(x)




// ����ĳ��ĳ��ĳ�գ��ж���һ������һ��ĵڼ��죿

var    y=2019;
var    m=1;
var    d=1;
var    sum=0
switch(m){   
    case 1:
    sum=d
    break;
    case 2:
    sum=d+31
    break;
    case 3:
    sum=d+31+28
    break;
    case 4:
    sum=d+31*2+28
    break;
    case 5:
    sum=d+31*2+28+30*1
    break;
    case 6:
    sum=d+31*3+28+30*1
    break;
    case 7:
    sum=d+31*3+28+30*2
    break;
    case 8:
    sum=d+31*4+28+30*2
    break;
    case 9:
    sum=d+31*5+28+30*2
    break;
    case 10:
    sum=d+31*5+28+30*3
    break;
    case 11:
    sum=d+31*6+28+30*3
    break;
    case 12:
    sum=d+31*6+28+30*4
    break;
}
if(y%4==0&&y%100!=0||y%400==0){
    s+=1
}
console.log(sum);





//             var year = 2016
//             var month = 2
//             var day = 5
//             var sum = 0;
// switch(month-1){
//                 case 12:
//                    sum += 31;
//                 case 11:
//                     sum += 30;
//                 case 10:
//                    sum += 31;
//                 case 9:
//                    sum += 30;
//                 case 8:
//                    sum += 31;
//                 case 7:
//                    sum += 31;
//                 case 6:
//                    sum += 30;
//                 case 5:
//                    sum += 31;
//                 case 4:
//                    sum += 30;
//                 case 3:
//                    sum += 31;
//                 case 2:
//                    sum += 28;
//                 case 1:
//                    sum += 31;
//             }
//             if((year%4==0&&year%100!=0||year%400==0)&&month>2){
//                 sum += (day+1);
//             }else{
//                 sum += day;
//             }
//            console.log("Ϊ����ĵ�"+sum+"��");



//             for(var i=1;i<month;i++){
//                 if(i==1||i==3||i==5||i==7||i==8||i==10||i==12){
//                     sum += 31;
//                 }else if(i==4||i==6||i==9||i==11){
//                     sum += 30;
//                 }else if(i==2){
//                     sum += 28;
//                 }
//             }
//             if((year%4==0&&year%100!=0||year%400==0)&&month>2){
//                 sum += (day+1);
//             }else{
//                 sum += day;
//             }
//             cosnole.log("Ϊ����ĵ�"+sum+"��");



