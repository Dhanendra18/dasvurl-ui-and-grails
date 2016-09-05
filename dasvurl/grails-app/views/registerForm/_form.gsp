<%@ page import="com.dasvurl.RegisterForm" %>



<div class="fieldcontain ${hasErrors(bean: registerFormInstance, field: 'mobileNo', 'error')} required">
	<label for="mobileNo">
		<g:message code="registerForm.mobileNo.label" default="Mobile No" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="mobileNo" maxlength="12" required="" value="${registerFormInstance?.mobileNo}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: registerFormInstance, field: 'age', 'error')} required">
	<label for="age">
		<g:message code="registerForm.age.label" default="Age" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="age" maxlength="3" required="" value="${registerFormInstance?.age}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: registerFormInstance, field: 'gender', 'error')} required">
	<label for="gender">
		<g:message code="registerForm.gender.label" default="Gender" />
		<span class="required-indicator">*</span>
	</label>
	<g:select name="gender" from="${registerFormInstance.constraints.gender.inList}" required="" value="${registerFormInstance?.gender}" valueMessagePrefix="registerForm.gender"/>

</div>

<div class="fieldcontain ${hasErrors(bean: registerFormInstance, field: 'address', 'error')} required">
	<label for="address">
		<g:message code="registerForm.address.label" default="Address" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="address" required="" value="${registerFormInstance?.address}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: registerFormInstance, field: 'correspondingAddress', 'error')} required">
	<label for="correspondingAddress">
		<g:message code="registerForm.correspondingAddress.label" default="Corresponding Address" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="correspondingAddress" required="" value="${registerFormInstance?.correspondingAddress}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: registerFormInstance, field: 'currentEducationStatus', 'error')} required">
	<label for="currentEducationStatus">
		<g:message code="registerForm.currentEducationStatus.label" default="Current Education Status" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="currentEducationStatus" required="" value="${registerFormInstance?.currentEducationStatus}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: registerFormInstance, field: 'dateOfBirth', 'error')} required">
	<label for="dateOfBirth">
		<g:message code="registerForm.dateOfBirth.label" default="Date Of Birth" />
		<span class="required-indicator">*</span>
	</label>
	<g:datePicker name="dateOfBirth" precision="day"  value="${registerFormInstance?.dateOfBirth}"  />

</div>

<div class="fieldcontain ${hasErrors(bean: registerFormInstance, field: 'email', 'error')} required">
	<label for="email">
		<g:message code="registerForm.email.label" default="Email" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="email" required="" value="${registerFormInstance?.email}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: registerFormInstance, field: 'landlineNo', 'error')} required">
	<label for="landlineNo">
		<g:message code="registerForm.landlineNo.label" default="Landline No" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="landlineNo" required="" value="${registerFormInstance?.landlineNo}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: registerFormInstance, field: 'lastName', 'error')} required">
	<label for="lastName">
		<g:message code="registerForm.lastName.label" default="Last Name" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="lastName" required="" value="${registerFormInstance?.lastName}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: registerFormInstance, field: 'passport', 'error')} ">
	<label for="passport">
		<g:message code="registerForm.passport.label" default="Passport" />
		
	</label>
	<g:checkBox name="passport" value="${registerFormInstance?.passport}" />

</div>

<div class="fieldcontain ${hasErrors(bean: registerFormInstance, field: 'qualification', 'error')} required">
	<label for="qualification">
		<g:message code="registerForm.qualification.label" default="Qualification" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="qualification" required="" value="${registerFormInstance?.qualification}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: registerFormInstance, field: 'schoolName', 'error')} required">
	<label for="schoolName">
		<g:message code="registerForm.schoolName.label" default="School Name" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="schoolName" required="" value="${registerFormInstance?.schoolName}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: registerFormInstance, field: 'toldName', 'error')} required">
	<label for="toldName">
		<g:message code="registerForm.toldName.label" default="Told Name" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="toldName" required="" value="${registerFormInstance?.toldName}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: registerFormInstance, field: 'universityName', 'error')} required">
	<label for="universityName">
		<g:message code="registerForm.universityName.label" default="University Name" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="universityName" required="" value="${registerFormInstance?.universityName}"/>

</div>

