<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>





<style type="text/css">
#tree_list_add {
	margin-left: 20px;
}

#tree-table {
	border: 1px solid black;
	height: 360px;
	width: 220px;
	padding: 10px;
}

#tree-table-div {
	margin: 10px;
}

#approval-table {
	text-align: center;
	width: 100%;
	
}

.nav-tabs>li:before, .nav-tabs>li:after {
	content: " ";
	display: block;
	position: absolute;
	top: 0;
	height: 100%;
	width: 12px;
	background-color: #f7f7f7;
	transition: all 250ms ease;
}

.nav-tabs>li {
	float: left;
	position: relative;
	cursor: pointer;
	z-index: 2;
	transition: all 250ms ease;
	padding: 0;
	margin: 5px 12px -1px 0;
	background-color: #f7f7f7;
	border-top: 1px solid #d4d4d4;
	border-bottom: 1px solid #d4d4d4;
	list-style: none;
}

.nav-tabs>li>a {
	color: #999;
	display: block;
	padding: 4px 10px 1px 11px;
	text-decoration: none;
}

.nav-tabs>li:after {
	left: -4px;
	transform: skew(-25deg, 0deg);
	box-shadow: #d4d4d4 -1px 1px 0;
}

.nav-tabs>li {
	border-radius: 7px 7px 0 0;
}

.nav-tabs>li:before {
	right: -4px;;
	transform: skew(25deg, 0deg);
	box-shadow: #d4d4d4 1px 1px 0;
}

.nav-tabs>li:before {
	border-radius: 0 2px 0 0;
}

.nav-tabs>li:after {
	border-radius: 2px 0 0 0;
}

.link-tab:hover {
	background: #f7f7f7;
}

ul.nav-tabs {
	border-bottom: 1px solid #d4d4d4;
}

#grid-top-date {
	margin: 4px 0;
	line-height: 1.7;
	position: relative;
	display: inline-block;
}

#top-search-bar {
	width: 200px;
	align-content: flex-end;
	height: 18.53px;
}

#top-search-btn {
	width: 77px;
	height: 20px;
	padding: 0px;
	height: 32.06px;
}

#top-search-select {
	width: 77px;
	height: 20px;
	padding: 0px;
	height: 32.06px;
}
</style>

<!-- Tree Css -->
<link rel="stylesheet" href="/css/demo.css" type="text/css">
<link rel="stylesheet" href="/css/zTreeStyle/zTreeStyle.css"
	type="text/css">

</head>
<body id="page-top">
	<div id="wrapper">


		<!-- Content Wrapper -->
		<div id="content-wrapper" class="d-flex flex-column">
			<div class="card">
				<div class="card-body">

					<div class="wrapper-toolbar">

						<div style="float: left">문서양식함 관리</div>
						<div style="text-align: right;">
							<form class="form-inline">

								<!-- 검색 설정 -->
								<select class="btn btn-gradient-light" id="top-search-select">
									<option selected="selected">제목</option>
									<option>구분</option>
									<option>결재자</option>
								</select> <input style="display: inline-block;" id="top-search-bar"
									class="form-control" type="search" placeholder="입력 후 [Enter]"
									aria-label="Search">
								<button id="top-search-btn" class="btn btn-info" type="submit">검색</button>

							</form>
						</div>
					</div>

					<ul class="nav-tabs">
						
					</ul>


					
					<div id="content">


						<!-- 내용 -->
						<div class="container-fluid">

							<!-- 문서양식함 트리 -->
							<div id="document-tree-wrapper-div">
							<div style="float: left">

								<ul id="document-tree" class="ztree"></ul>
							</div>

							<div style="float: left">
								<button class="btn btn-info" id="document-tree-btn">문서양식함
									추가 
								<i class="mdi mdi-arrow-right-bold"></i>	
									</button>
							</div>


							<div>
								<div class="card" id="document-card">
								
								<table class="table table-bordered">
								<input type="hidden" id="up-type-no">
								<form action="upAdd" method="post">
								<tbody>
								   <tr>
								      <td>상위양식코드</td>
								      <td><input id="up-type-cd" class="form-control document-card-input" name="approvalUpTypeCd"></td>
								   </tr>
								   <tr>
								      <td>상위양식함명</td>
								      <td><input class="form-control document-card-input" name="codeName"></td>   
								   </tr>
								   <tr>
								   <td>
								   <button class="btn btn-info">추가</button>
								   </td>
								   </form>
								   <td>
								   <button id="approval-add-btn" class="btn btn-info" onclick="location.href='/document/add'">신규 양식 등록</button>
								   </td>
								   </tr>
								   
								   
								
								</tbody>
								
								
								
								</table>
									
								</div>
							</div>
							
							</div>

							<table class="table-bordered mt-2" id="approval-table">
								<thead>
									<tr>
										<th>선택</th>
										<th>상위폴더</th>
										<th>문서양식명</th>
										<th>등록일</th>
										<th>관리</th>
									</tr>
								</thead>
								<tbody>
									<c:forEach items="${list}" var="vo" varStatus="i">
										<tr class="approval-list">
											<td><input type="checkbox" class="approval-check-box" name="checkList" value="${vo.approvalTypeNo}"></td>
											<td>${vo.approvalUpTypeVO.codeName}</td>
											<td>${vo.codeName}</td>
											<td>${vo.regDate}</td>
											<td><button class="btn btn-info document-update" onclick="location.href='/document/update?approvalTypeNo=${vo.approvalTypeNo}'">수정</button></td>
										</tr>
									</c:forEach>
								</tbody>

							</table>
						<c:forEach items="${list}" var="vo" varStatus="i">
						    <span style="display: none;" class="get-up-code-name" data-up-type-cd="${vo.approvalUpTypeVO.approvalUpTypeCd}" data-code-name="${vo.codeName}" data-up-code-name="${vo.approvalUpTypeVO.codeName}"
						    data-up-up-no="${vo.approvalUpTypeVO.approvalUpTypeNo}" data-up-no="${vo.approvalUpTypeNo}"></span>
						</c:forEach>
						</div>
					</div>

					<!-- Pagination -->
					<div style="text-align: center; margin: 20px 20px">
						<nav aria-label="Page navigation example"
							style="display: inline-block;">
							<ul class="pagination">
								<li class="page-item ${pager.pre?'':'disabled'}"><a
									class="page-link" href="/approval/getList?page=${startNum-1}"
									aria-label="Previous"> <i
										class="mdi mdi-arrow-left-drop-circle"></i>
								</a></li>

								<c:forEach begin="${pager.startNum}" end="${pager.lastNum}"
									var="i">
									<li class="page-item"><a class="page-link"
										href="/approval/getList?page=${i}">${i}</a></li>
								</c:forEach>

								<li class="page-item ${pager.next?'':'disabled'}"><a
									class="page-link" href="/approval/getList?page=${lastNum+1}"
									aria-label="Next"> <i
										class="mdi mdi-arrow-right-drop-circle"></i>
								</a></li>
								
								<!-- Button List -->
								
								<button id="delete-btn" class="btn btn-info">삭제하기
								</button>
								
								<!-- Button List End -->
								
							</ul>
						</nav>

						<!-- Pager End -->





					</div>
				</div>
			</div>



		    <script src="/js/ztree/up-document-tree.js"></script>
			<script src="/js/document/check-box.js"></script>
			
</body>
</html>