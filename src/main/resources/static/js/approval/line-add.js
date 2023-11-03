/**
 * 결재선 줄수에 따라 뒤에 숫자 달라짐
 * ex) approvalLine1=>결재선에 기안자 확인란만 있음
 */

let approvalLine3 = '<span id="docs-internal-guid-154649cb-7fff-4066-e4b2-8ebdc9ce0973"><div dir="ltr" style="margin-left:150pt;" align="center"><table class="__se_tbl_ext" style="border:none;border-collapse:collapse;"><colgroup><col width="58"><col width="86"><col width="86"><col width="86"></colgroup><tbody><tr style="height:5.5872802734375pt"><td rowspan="3" style="height:5.5872802734375pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;background-color:#cccccc;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br><img id="sign-img-base" width="70px" height="40px" src=""> <br><br><p dir="ltr" style="line-height:1.2;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 10pt; font-family: Arial, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;">결 재</span></p></td><td style="height:5.5872802734375pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br></td><td style="height:5.5872802734375pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br></td><td style="height:5.5872802734375pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br></td></tr><tr style="height:62.25pt"><td style="height:62.25pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br></td><td style="height:62.25pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br></td><td style="height:62.25pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br></td></tr><tr style="height:0pt"><td style="height:0pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br></td><td style="height:0pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br></td><td style="height:0pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br></td></tr></tbody></table></div></span>';

let approvalLine1 = '<span id="docs-internal-guid-fe95ce02-7fff-fe80-414b-be8c661eb408"><div dir="ltr" style="margin-left:0pt;" align="center"><table class="__se_tbl_ext" style="border:none;border-collapse:collapse;"><colgroup><col width="58"><col width="86"><col width="86"></colgroup><tbody><tr style="height:5.5872802734375pt"><td rowspan="3" style="height:5.5872802734375pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;background-color:#cccccc;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br><br><br><p dir="ltr" style="line-height:1.2;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 10pt; font-family: Arial, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;">결 재</span></p></td><td style="height:5.5872802734375pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br><img id="sign-img-base" width="70px" height="40px" src=""> </td></tr><tr style="height:62.25pt"><td style="height:62.25pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br></td></tr><tr style="height:0pt"><td style="height:0pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br></td></tr></tbody></table></div></span>';
let approvalLine2 = '<span id="docs-internal-guid-cd17d2e4-7fff-73bf-9298-d08ee55fc4c4"><div dir="ltr" style="margin-left:200pt;" align="center"><table class="__se_tbl_ext" style="border:none;border-collapse:collapse;"><colgroup><col width="58"><col width="86"><col width="86"></colgroup><tbody><tr style="height:5.5872802734375pt"><td rowspan="3" style="height:5.5872802734375pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;background-color:#cccccc;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br><br><br><p dir="ltr" style="line-height:1.2;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 10pt; font-family: Arial, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;">결 재</span></p></td><td style="height:5.5872802734375pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br></td><td style="height:5.5872802734375pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br><img id="sign-img-base" width="70px" height="40px" src=""> </td></tr><tr style="height:62.25pt"><td style="height:62.25pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br></td><td style="height:62.25pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br></td></tr><tr style="height:0pt"><td style="height:0pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br></td><td style="height:0pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br></td></tr></tbody></table></div></span>';
let approvalLine4 = '<span id="docs-internal-guid-dd2f4b54-7fff-483f-b05c-461fdee09e8e"><div dir="ltr" style="margin-left:100pt;" align="center"><table class="__se_tbl_ext" style="border:none;border-collapse:collapse;"><colgroup><col width="58"><col width="86"><col width="86"><col width="86"><col width="86"></colgroup><tbody><tr style="height:5.5872802734375pt"><td rowspan="3" style="height:5.5872802734375pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;background-color:#cccccc;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br><img id="sign-img-base" width="70px" height="40px" src=""> <br><br><p dir="ltr" style="line-height:1.2;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 10pt; font-family: Arial, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;">결 재</span></p></td><td style="height:5.5872802734375pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br></td><td style="height:5.5872802734375pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br></td><td style="height:5.5872802734375pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br></td><td style="height:5.5872802734375pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br></td></tr><tr style="height:62.25pt"><td style="height:62.25pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br></td><td style="height:62.25pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br></td><td style="height:62.25pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br></td><td style="height:62.25pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br></td></tr><tr style="height:0pt"><td style="height:0pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br></td><td style="height:0pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br></td><td style="height:0pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br></td><td style="height:0pt; border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><br></td></tr></tbody></table></div></span>';

/*$('#approval-line-add-blank').text('');
*/
if ($('#add-app').text() != '') {
	$('#approval-line-add-blank').append(approvalLine3)
	
}

$('html').mouseover(function(){
	$('#sign-img-base').attr('src', formSign);
})

$('#approval-line-add-blank').append(approvalLine2);


/* 삭제
*/






$('#app-delete-btn').click(function() {

	swal({
		text: '정말로 삭제하시겠습니까?',
		buttons: ['취소', '확인'],
		dangerMode: true
	}).then(function() {
		let deleteNo = $('#add-app').attr('data-no');

		$.ajax({
			type: 'POST',
			url: '/approval/delete',
			data: {
				approvalNo: deleteNo
			}, success: function(result) {
				if (result.trim() > 0) {
					console.log('삭제 성공')
				}
				location.replace('/approval/totalList')

			}, error: function() {
				console.log('삭제 실패')
			}
		})
	})
})


/*첨언 있을 시에 본문 내용에 첨언 추가
*/
if (admonitionCheck) {

}
