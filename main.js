a=["mango","apple","banana","orange"];
c=[8,2,9,1];

 b=[{
		id:1,
		name:"pen",
		price:10,
	},
		
	{
		id:2,
		name:"pen",
		price:30,
	},
		
	{
		id:3,
		name:"pen",
		price:25,
	},
		
	{
		id:4,
		name:"pencil",
		price:30,
	},
		
	{
		id:5,
		name:"pencil",
		price:3,
	}
	];
/*1.forEach method*/
	document.write("c=[8,2,9,1]"+"<br>"+"<br>");
	var output=c.forEach(function(e){
			if(e%2==0){
				document.write(e);
				document.write("<br>"+"<br>")
			}
				})
/*2.filter method*/
						
	var output =b.filter(function(e){
				return e.name=="pen"; 
				})
				console.log(output);
/*3.map method*/
document.write("a=[mango,apple,banana,orange]"+"<br>"+"<br>");
				
	var output=a.map(function(e){
		return e.toUpperCase ();
		})
			document.write(output);
			document.write("<br>"+"<br>")