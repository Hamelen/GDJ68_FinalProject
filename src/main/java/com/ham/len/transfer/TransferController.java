package com.ham.len.transfer;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.ham.len.commons.CodeVO;
import com.ham.len.humanresource.HumanResourcePager;
import com.ham.len.humanresource.HumanResourceService;
import com.ham.len.humanresource.HumanResourceVO;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
@RequestMapping("/transfer/*")
public class TransferController {
	@Autowired
	private TransferService transferService;
	
	@Autowired
	private HumanResourceService humanResourceService;
	
	@GetMapping("registration")
	public String setRegistration(@ModelAttribute TransferVO transferVO, Model model) {
		model.addAttribute("isRegistration", true);
		return "transfer/registration";
	}
	
	@PostMapping("registration")
	public String setRegistration(@Valid TransferVO transferVO, BindingResult bindingResult, Model model) {
		if(bindingResult.hasErrors()) {
			model.addAttribute("hasErrors", true);
			model.addAttribute("isRegistration", true);
			return "transfer/registration";
		}
		
		transferService.setTransfer(transferVO);
		model.addAttribute("result", 1);
		model.addAttribute("message", "등록이 완료되었습니다.");
		model.addAttribute("url", "/transfer/list");
		return "commons/result";
	}
	
	@GetMapping("update")
	public String setUpdate(String employeeID, Model model) {
		model.addAttribute("transferVO", transferService.getTransfer(employeeID));
		model.addAttribute("isUpdate", true);
		return "transfer/registration";
	}
	
	@PostMapping("update")
	public String setUpdate(@Valid HumanResourceVO humanResourceVO, BindingResult bindingResult, MultipartFile file, Model model) throws Exception {
		if(bindingResult.hasErrors()) {
			model.addAttribute("hasErrors", true);
			model.addAttribute("isUpdate", true);
			return "transfer/registration";
		}
		
		humanResourceService.setUpdate(humanResourceVO, file);
		model.addAttribute("result", 1);
		model.addAttribute("message", "수정이 완료되었습니다.");
		model.addAttribute("url", "/humanresource/update?employeeID=" + humanResourceVO.getEmployeeID());
		return "commons/result";
	}
	
	@GetMapping("list")
	public String getList(HumanResourcePager pager, Model model) {
		model.addAttribute("transferList", transferService.getTransferList(pager));
		model.addAttribute("departmentList", humanResourceService.getDepartmentList());
		model.addAttribute("pager", pager);
		return "transfer/list";
	}
	
	@ResponseBody
	@GetMapping("getHumanResourceList")
	public List<HumanResourceVO> getHumanResourceList(){
		return transferService.getHumanResourceList();
	}
	
	@ResponseBody
	@GetMapping("getCodeList")
	public List<CodeVO> getCodeList(@RequestParam String upCode){
		return transferService.getCodeList(upCode);
	}
}