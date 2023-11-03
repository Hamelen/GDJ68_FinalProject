package com.ham.len.humanresource;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.ham.len.commons.CodeVO;
import com.ham.len.transfer.TransferController;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;

@Getter
@Setter
@ToString
@Slf4j
public class HumanResourceVO extends CodeVO implements UserDetails {
	private String employeeID;
	private String password;
	private Timestamp joinDate;
	private Boolean joinType;
	private String name;
	private String birth;
	private String departmentCd;
	private String departmentCdName;
	private String positionCd;
	private String positionCdName;
	private String extensionNumber;
	private String phone;
	private String mainNumber;
	private String email;
	private String zipCode;
	private String address;
	private String addressDetail;
	private String bank;
	private String accountNumber;
	private String accountHolder;
	private String signature;
	private Timestamp quitDate;
	private String quitReason;
	private String regId;
	private java.util.Date regDate;
	private String regMenu;
	private String modId;
	private java.util.Date modDate;
	private String modMenu;
	private List<RoleVO> roles = new ArrayList<>(); // NullPointerException 방지
	
	@Override
	public String getUsername() {
		return employeeID;
	}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities(){
		List<GrantedAuthority> authorities = new ArrayList<>();
		
		for(RoleVO roleVO : roles) {
			authorities.add(new SimpleGrantedAuthority(roleVO.getRoleName()));
		}
		
		return authorities;
	}
	
	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
}