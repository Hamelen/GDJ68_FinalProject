<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>�ŷ�����</title>
<style>
        body {
            font-family: Arial, sans-serif;
        }
        .container {
            max-width: 1200px;
            height:650px;
            margin: auto;
            padding: 20px;
            border: 1px solid #ccc;
            background-color: #f9f9f9;
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        .invoice-details {
            margin-bottom: 30px;
        }
        .invoice-details span {
            display: inline-block;
        }
        .items-table {
            width: 100%;
            border-collapse: collapse;
        }
        .items-table th, .items-table td {
            border: 1px solid #ccc;
            padding: 8px;
            text-align: center;
        }
        .invoice-details-wrapper .invoice-details {
		    border: 2px solid #000;
		    padding: 10px;
}
.invoice-details-wrapper2 .invoice-details {
		    border: 1px solid #000;
		    padding: 10px;
		    width: 30%;
}
    </style>
</head>
<body>
<div class="container">
        <div class="header">
            <h1>�ŷ�����</h1>
        </div>
        <div class="invoice-details-wrapper2">
        <div class="invoice-details">
            <p>�ŷ�ó�� : <span class="clientName"></span></p>
            �ּ� : <span class="clientAddress"></span>
            <span class="clientRefAddress"></span>
            <span class="clientDetailAddress"></span>
            
            <p><span>�� </span> <span class="clientNumber"></span></p>
        </div>
        </div>

        <div class="invoice-details-wrapper">
        <div class="invoice-details">
        <span style="font-weight: bold;">�ݾ� : <span id="result"></span></span>
            <span style="float: right; font-weight: bold;">(��<span class="totalPrice"></span>)</span>
        </div>
        </div>
        
        
        <table class="items-table">
            <thead>
                <tr>
                    <th>����</th>
                    <th>ǰ���</th>
                    <th>����</th>
                    <th>�ܰ�</th>
                    <th>�հ�</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span class="purchaseDate"></span></td>
                    <td><span class="codeName"></span></td>
                    <td>?</td>
                    <td>?</td>
                    <td><span class="totalPrice"></span> ��</td>
                </tr>
            </tbody>
        </table>
        <br>
        
        <div class="invoice-details" style="text-align: right;">
            <span>����: </span> ?<br>
            <span>���ް���: </span> ?<br>
            <span>�ΰ��� (VAT):</span> ?<br>
            <span>�� �ݾ�: </span> <span class="totalPrice"></span> ��<br>
        </div>
        <div style="text-align: center;">
        <br>
            <span style="font-size:xx-large;">��ȣ����Ʈ</span>
            <div style="text-align: right;">
            
            <form action="./excelDownload" method="get">
            <input type="hidden" name="purDate" value="">
	        <input type="hidden" name="cliName" value="">
	        <input type="hidden" name="codName" value="">
	        <input type="hidden" name="toPrice" value="">
    			<button id="submit">���� �ٿ�ε�</button>
        	</form>
	</div>
        </div>
    </div>
    
 
    
    
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function() {
    let purDate = window.opener.purDate;
    let cliName = window.opener.cliName;
    let codName = window.opener.codName;
    let toPrice = window.opener.toPrice;
    let result = toPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    let empId = window.opener.empId;
    let clientZipCode = window.opener.clientZipCode;
    let clientAddress = window.opener.clientAddress;
    let clientRefAddress = window.opener.clientRefAddress;
    let clientDetailAddress = window.opener.clientDetailAddress;
    let clientNumber = window.opener.clientNumber;

    
    document.querySelectorAll('.purchaseDate').forEach(function(element) {
        element.innerText = purDate;
    });

    document.querySelectorAll('.clientName').forEach(function(element) {
        element.innerText = cliName;
    });

    document.querySelectorAll('.codeName').forEach(function(element) {
        element.innerText = codName;
    });

    document.querySelectorAll('.totalPrice').forEach(function(element) {
        element.innerText = result;
    });

    document.querySelectorAll('.employeeId').forEach(function(element) {
        element.innerText = empId;
    });
    
    document.querySelectorAll('.clientZipCode').forEach(function(element) {
        element.innerText = clientZipCode;
    });
    
    document.querySelectorAll('.clientAddress').forEach(function(element) {
        element.innerText = clientAddress;
    });
    
    document.querySelectorAll('.clientRefAddress').forEach(function(element) {
        element.innerText = clientRefAddress;
    });
    
    document.querySelectorAll('.clientDetailAddress').forEach(function(element) {
        element.innerText = clientDetailAddress;
    });
    
    document.querySelectorAll('.clientNumber').forEach(function(element) {
        element.innerText = clientNumber;
    });

let a = num2han(toPrice) + '�� ��';
document.getElementById('result').innerText=a;
console.log(a);

console.log(num2han(1234));

function num2han(num) { 
	num = parseInt((num + '').replace(/[^0-9]/g, ''), 10) + '';  	// ����/����/�� �� ���ڸ� �ִ� ���ڿ��� ��ȯ  
	
	if(num == '0')    
		return '��';  
	
	var number = ['��', '��', '��', '��', '��', '��', '��', 'ĥ', '��', '��'];  
	var unit = ['', '��', '��', '��'];  
	var smallUnit = ['õ', '��', '��', '']; 
	
	var result = [];  //��ȯ�� ���� ������ �迭  
	
	var unitCnt = Math.ceil(num.length / 4);	//���� ����. ���� 10000�� �ϴ����� ������ 2���̴�.  
	num = num.padStart(unitCnt * 4, '0')	//4�ڸ� ���� �ǵ��� 0�� ä���  

	var regexp = /[\w\W]{4}/g;  //4�ڸ� ������ ���� �и�  
	var array = num.match(regexp);  
	
	//���� �ڸ������� ���� �ڸ��� ������ ���� �����(�׷��� �ڸ��� ����� ���ϴ�)  
	for(var i = array.length - 1, unitCnt = 0; i >= 0; i--, unitCnt++) {  
		var hanValue = _makeHan(array[i]);	//�ѱ۷� ��ȯ�� ����   
		if(hanValue == '')  //���� ������ �ش� ������ ���� ��� 0�̶� ��.       
		continue;
		
		result.unshift(hanValue + unit[unitCnt]);  //unshift�� �׻� �迭�� �տ� �ִ´�.  
	}  
	
		//����� ������ ���� ������ ���ڸ��̴�. 1234 -> ��õ�̹��ʻ�  
		function _makeHan(text) {    
			var str = '';    
			for(var i = 0; i < text.length; i++) {      
				var num = text[i];      
				if(num == '0')  //0�� ���� �ʴ´�        
				continue;  
				
				str += number[num] + smallUnit[i];    
				}    
			return str;  
			}  
		return result.join('');
		}
		
		

console.log(cliName)
console.log("zzz")
});


</script>
</body>
</html>