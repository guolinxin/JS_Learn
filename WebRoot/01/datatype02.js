/**
 * �������ͺ�����ת��
 */
(function(){
	/**
	  * 2��������
	  * (1)����-->����ļ���(array):�±�(index) �Ǵ�0��ʼ��	 
	 */
	//����
	//constructor ���ضԴ����ζ��������ĺ�������
	//index 
	//input
	//*length
	//����
//	*concat �ϲ�����
//	*join �����鰴��һ���ĸ�ʽ���д���
//	*push �����׷��
//	*pop ɾ�����鷵�ص����һ��Ԫ��
	//sort toString shift ɾ�����ҷ�������ĵ�һ��Ԫ��
	var arr = new Array();
	arr.push(1);
	arr.push(55);
	arr.push(5);
	arr.push(3);
	arr.push(9);
	//alert(arr.length)
	var arr2 = [1,2,3,45,6,7,8];
	//alert(arr2.join(":"));
	//alert(arr.concat(arr2).toString())
	for (var i = 0; i < arr2.length; i++) {
		document.write(arr2[i]+"<br>");
	}
	//��չarray�ķ���
	Array.each = function(array,fn){
		for (var i = 0; i < array.length; i++) {
			fn(array[i])
		}
	}
	Array.each(arr2,function(v){
		document.write(v+"<br>");
	})
})()





