package com.ham.len.admin;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ham.len.commons.CodeVO;
import com.ham.len.commons.Pager;

@Mapper
public interface CodeDAO {

	public CodeVO getDetail(CodeVO codeVO) throws Exception;
	
	public List<CodeVO> getList(Pager pager) throws Exception;
	
	public Long getTotal(Pager pager) throws Exception;
	
	public Long getCodeCheck(CodeVO codeVO) throws Exception;
	
	public int setAdd(CodeVO codeVO) throws Exception;
	
	public int setUpdate(CodeVO codeVO) throws Exception;
	
	public int setDelete(CodeVO codeVO) throws Exception;
	
	public String getLastId(CodeVO codeVO) throws Exception;
	
	
}
