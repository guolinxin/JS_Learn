/**
 * js��������ɢ֪ʶ
 */
(function(){
	//1�쳣����
//	try{
//		
//	}catch(e){
//		
//	}
	try{
		//alert(2/0)	
	}catch(e){
		//throw new Error(e)
	}
})()
	/**
	 * ��ʱ��
	 * setTimeout
	 * δ��ĳ��ʱ��ִ��һ�δ���
	 */
	function timedMsg(){
		//һ�����Ժ�����ĺ���
		var t = setTimeout("alert('1 miao zhong ')",1000);
	}
	
	var c = 0;
	var t ;
	function timedCount(){
		document.getElementById("txt").value = c;
		c = c+1;
		t = setTimeout("timedCount()",1000)
	}
	
	function stop(){
		clearTimeout(t);
	}
	
	
	
	
	
	