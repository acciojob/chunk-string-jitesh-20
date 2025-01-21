function stringChop(str, size) {
	let strArr=[];
	for(let i=0;i<str.length;i=i+size){
		let s='',j=0;
		while(j<size){
			s+=str[j];
			j++;
		}
		strArr.push(s);
	}
	return strArr;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
