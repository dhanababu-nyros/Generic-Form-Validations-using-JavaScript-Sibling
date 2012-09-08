arr=[];
var c=0;
arr_1=[];
var c_1=0;
function validateForm(_f) {
	var _regExp=/[0-9]/i;<!--for user name validation-->
	
	var _regEmail=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;<!--for email validation-->
	
	<!--to store the radio box elements and check box elements in the array-->
	
	
	 for(var _obj = _f.firstChild; _obj ; _obj=_obj.nextSibling)
	 {
		 if (_obj.type == 'radio')
		 	  {
			arr[c]=_obj;
			c++;
		}
		 if (_obj.type == 'checkbox') {
			arr_1[c_1]=_obj;
			c_1++;
		}
		
	 }
	 
	 
	 <!--validation for all HTML elements-->
	 
	 
    for(var _obj = _f.firstChild; _obj ; _obj=_obj.nextSibling)
	{
	if(_obj.name!=undefined)
	  {
		  
		  
		  <!--validation for text box elements-->
		  
		  
			if(_obj.type=="text"){
			result=_regExp.test(_obj.value);
			var l=_obj.value.length;
			
			<!--for email validation-->
			
			if(_obj.getAttribute("Email")){
				result_1=_regEmail.test(_obj.value);
			if(_obj.value==""||_obj.value=="null"||result_1==false)
			{
				alert("please enter correct email address");
				_obj.focus();
				
				break;
			}
			}
			
			<!--for Name validation-->
			
			
			else{	
			if(_obj.value==""||_obj.value=="null"||result==true||l<4||l>16)
			{
				alert("please enter "+_obj.name+" alphabets only and length must between 4 & 16 char");
				_obj.focus();
				
				break;
			}
		}
		}
			<!--for password validation-->
			
			
			if(_obj.type=="password"){
				var l=_obj.value.length;
	 			if(_obj.value==""||_obj.value=="null"||l<4||l>16)
			{
				var not_def=_obj.value;
			alert("please enter password length must between 4 & 16 char");
			_obj.focus();
			break;
		}
	}
	
	<!--for radio button validation-->
	
	
	if(_obj.type=="radio")
		{
			<!--calling the function for validating radio button-->
			
		x= find(arr,_obj);
	
	if(x!=true){
				return false;
			}
			else{
				continue;	
			}
}


<!--for check box validation-->


if(_obj.type=="checkbox")
		{
			
			<!--calling the function for validating check box-->
				
 	x_1= find_c(arr_1,_obj);
	if(x_1!=true){
				return false;
			}
			else{
				continue;	
			}
   }

<!--for select box validation-->


		var _regExp1=/select/i;
		
		if(_obj.type.match(_regExp1)){
			
			if(_obj.value=='select'){
				
			alert("please select "+_obj.name);
			_obj.focus();
			return false;
			}
	  }
}
  }
  
 return false;
}

<!--called function for radio button validation-->

function find(arr,obj ){
	var m=0;
	var val=0;
	for(k=0;k<arr.length;k++){
		if(arr[k].name==obj.name){
			m++;	
		}
	}
	for(k=0;k<m;k++){
		if(arr[k].checked==true){
			val=1;
		}
	}
	if(val==1)
	{
		return true;
	}
	else{
		alert("please select "+obj.name);
		return false;
	}
}

<!--called function for check box validation-->


 function find_c(arr_1,obj ){
	var m=0;
	var val=0;

	for(k=0;k<arr_1.length;k++){
		if(arr_1[k].name==obj.name){
			m++;	
		}
		}
	for(k=0;k<m;k++){
		
		if(arr_1[k].checked==true){
			
			val=1;
			
		}
	}
	if(val==1)
	{
		return true;
	}
	else{
		alert("please select "+obj.name);
		return false;
	}
}
