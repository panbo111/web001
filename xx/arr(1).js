// var arr=[1,2,3,4,5]
// var arr1=arr.toString();
// console.log(arr1)

// var arr2=arr.join("|")
// console.log(arr2)

// var arrr=["ww","jj"]
// var arr3=arr.concat(arrr)
// console.log(arr3)

// var arr4=arr.slice(2,4)
// console.log(arr4)
// // 注意这些都是返回的新数组 对原数组没有影响
// console.log(arr)


// var arr=["a","b","c","d"]
// var arr1=[]
// for(var i=arr.length-1;i>=0;i--){
//    arr1=arr1.concat(arr[i])  
// }
// console.log(arr1)




// fun(1)(2)  要求输出3  看看你们有没有自己的想法



var arr1=[1,3,5,7,9,8,6,4,2,33,89,77,34]


function aa(arr){
	for (var i=0;i<arr.length-1 ;i++ ){
		for (var j=0;j<arr.length-1 ;j++ ){
			if(arr[j]>arr[j+1]){
				var c=arr[j]
					arr[j]=arr[j+1]
					arr[j+1]=c
			}
		}
	}
	
}
aa(arr1)
console.log(arr1)




//排序   最后输出arr 里面的内容从小到到排列
//[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 33, 34, 77, 89 ]








var arr1=[1,5,6,7,3,11,55,22,66,1,44,5,6,7,7,9,9,3,5]
var hash={};


function aa(arr){
	for (var i=0;i<arr.length ;i++ ){
		if(hash[arr[i]]==undefined){
			hash[arr[i]]=1
		}eler{
			hash[arr[i]]++
		}


	}
	return hash

}
aa(arr1)
console.log(hash)