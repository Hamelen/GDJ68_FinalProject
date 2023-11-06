package com.ham.len.humanresource;

import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class HumanResourceService implements UserDetailsService {
	@Autowired
	private HumanResourceDAO humanResourceDAO;
	
	@Autowired
	PasswordEncoder passwordEncoder;

	@Override
	public UserDetails loadUserByUsername(String employeeID) throws UsernameNotFoundException {
		HumanResourceVO humanResourceVO = humanResourceDAO.getHumanResource(employeeID);
		return humanResourceVO;
	}
	
	public int setRegistration(HumanResourceVO humanResourceVO, MultipartFile file) throws Exception {
		humanResourceVO.setProfile(encodeImageToBase64(file));
		humanResourceVO.setPassword(passwordEncoder.encode("1234"));
		return humanResourceDAO.setRegistration(humanResourceVO);
	}
	
	private String encodeImageToBase64(MultipartFile file) throws Exception {
		byte[] fileContent = file.getBytes();
		byte[] encodedBytes = Base64.encodeBase64(fileContent);
		String base64String = new String(encodedBytes);
		return base64String;
	}
}