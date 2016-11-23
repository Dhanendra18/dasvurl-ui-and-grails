<%@ page import="com.dasvurl.WebRegister" %>



<div class="fieldcontain ${hasErrors(bean: webRegisterInstance, field: 'fullName', 'error')} required">
	<label for="fullName">
		<g:message code="webRegister.fullName.label" default="Full Name" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="fullName" required="" value="${webRegisterInstance?.fullName}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: webRegisterInstance, field: 'email', 'error')} required">
	<label for="email">
		<g:message code="webRegister.email.label" default="Email" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="email" required="" value="${webRegisterInstance?.email}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: webRegisterInstance, field: 'phoneNumber', 'error')} required">
	<label for="phoneNumber">
		<g:message code="webRegister.phoneNumber.label" default="Phone Number" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="phoneNumber" required="" value="${webRegisterInstance?.phoneNumber}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: webRegisterInstance, field: 'gender', 'error')} required">
	<label for="gender">
		<g:message code="webRegister.gender.label" default="Gender" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="gender" required="" value="${webRegisterInstance?.gender}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: webRegisterInstance, field: 'country1', 'error')} required">
	<label for="country1">
		<g:message code="webRegister.country1.label" default="Country1" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="country1" required="" value="${webRegisterInstance?.country1}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: webRegisterInstance, field: 'country2', 'error')} required">
	<label for="country2">
		<g:message code="webRegister.country2.label" default="Country2" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="country2" required="" value="${webRegisterInstance?.country2}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: webRegisterInstance, field: 'country3', 'error')} required">
	<label for="country3">
		<g:message code="webRegister.country3.label" default="Country3" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="country3" required="" value="${webRegisterInstance?.country3}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: webRegisterInstance, field: 'course', 'error')} required">
	<label for="course">
		<g:message code="webRegister.course.label" default="Course" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="course" required="" value="${webRegisterInstance?.course}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: webRegisterInstance, field: 'intake', 'error')} required">
	<label for="intake">
		<g:message code="webRegister.intake.label" default="Intake" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="intake" required="" value="${webRegisterInstance?.intake}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: webRegisterInstance, field: 'lastModified', 'error')} ">
	<label for="lastModified">
		<g:message code="webRegister.lastModified.label" default="Last Modified" />
		
	</label>
	<g:datePicker name="lastModified" precision="day"  value="${webRegisterInstance?.lastModified}" default="none" noSelection="['': '']" />

</div>

