
<%@ page import="dasvurl.RegisterForm" %>
<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'registerForm.label', default: 'RegisterForm')}" />
		<title><g:message code="default.show.label" args="[entityName]" /></title>
	</head>
	<body>
		<a href="#show-registerForm" class="skip" tabindex="-1"><g:message code="default.link.skip.label" default="Skip to content&hellip;"/></a>
		<div class="nav" role="navigation">
			<ul>
				<li><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></li>
				<li><g:link class="list" action="index"><g:message code="default.list.label" args="[entityName]" /></g:link></li>
				<li><g:link class="create" action="create"><g:message code="default.new.label" args="[entityName]" /></g:link></li>
			</ul>
		</div>
		<div id="show-registerForm" class="content scaffold-show" role="main">
			<h1><g:message code="default.show.label" args="[entityName]" /></h1>
			<g:if test="${flash.message}">
			<div class="message" role="status">${flash.message}</div>
			</g:if>
			<ol class="property-list registerForm">
			
				<g:if test="${registerFormInstance?.mobileNo}">
				<li class="fieldcontain">
					<span id="mobileNo-label" class="property-label"><g:message code="registerForm.mobileNo.label" default="Mobile No" /></span>
					
						<span class="property-value" aria-labelledby="mobileNo-label"><g:fieldValue bean="${registerFormInstance}" field="mobileNo"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${registerFormInstance?.age}">
				<li class="fieldcontain">
					<span id="age-label" class="property-label"><g:message code="registerForm.age.label" default="Age" /></span>
					
						<span class="property-value" aria-labelledby="age-label"><g:fieldValue bean="${registerFormInstance}" field="age"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${registerFormInstance?.gender}">
				<li class="fieldcontain">
					<span id="gender-label" class="property-label"><g:message code="registerForm.gender.label" default="Gender" /></span>
					
						<span class="property-value" aria-labelledby="gender-label"><g:fieldValue bean="${registerFormInstance}" field="gender"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${registerFormInstance?.address}">
				<li class="fieldcontain">
					<span id="address-label" class="property-label"><g:message code="registerForm.address.label" default="Address" /></span>
					
						<span class="property-value" aria-labelledby="address-label"><g:fieldValue bean="${registerFormInstance}" field="address"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${registerFormInstance?.correspondingAddress}">
				<li class="fieldcontain">
					<span id="correspondingAddress-label" class="property-label"><g:message code="registerForm.correspondingAddress.label" default="Corresponding Address" /></span>
					
						<span class="property-value" aria-labelledby="correspondingAddress-label"><g:fieldValue bean="${registerFormInstance}" field="correspondingAddress"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${registerFormInstance?.currentEducationStatus}">
				<li class="fieldcontain">
					<span id="currentEducationStatus-label" class="property-label"><g:message code="registerForm.currentEducationStatus.label" default="Current Education Status" /></span>
					
						<span class="property-value" aria-labelledby="currentEducationStatus-label"><g:fieldValue bean="${registerFormInstance}" field="currentEducationStatus"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${registerFormInstance?.dateOfBirth}">
				<li class="fieldcontain">
					<span id="dateOfBirth-label" class="property-label"><g:message code="registerForm.dateOfBirth.label" default="Date Of Birth" /></span>
					
						<span class="property-value" aria-labelledby="dateOfBirth-label"><g:formatDate date="${registerFormInstance?.dateOfBirth}" /></span>
					
				</li>
				</g:if>
			
				<g:if test="${registerFormInstance?.email}">
				<li class="fieldcontain">
					<span id="email-label" class="property-label"><g:message code="registerForm.email.label" default="Email" /></span>
					
						<span class="property-value" aria-labelledby="email-label"><g:fieldValue bean="${registerFormInstance}" field="email"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${registerFormInstance?.landlineNo}">
				<li class="fieldcontain">
					<span id="landlineNo-label" class="property-label"><g:message code="registerForm.landlineNo.label" default="Landline No" /></span>
					
						<span class="property-value" aria-labelledby="landlineNo-label"><g:fieldValue bean="${registerFormInstance}" field="landlineNo"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${registerFormInstance?.lastName}">
				<li class="fieldcontain">
					<span id="lastName-label" class="property-label"><g:message code="registerForm.lastName.label" default="Last Name" /></span>
					
						<span class="property-value" aria-labelledby="lastName-label"><g:fieldValue bean="${registerFormInstance}" field="lastName"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${registerFormInstance?.passport}">
				<li class="fieldcontain">
					<span id="passport-label" class="property-label"><g:message code="registerForm.passport.label" default="Passport" /></span>
					
						<span class="property-value" aria-labelledby="passport-label"><g:formatBoolean boolean="${registerFormInstance?.passport}" /></span>
					
				</li>
				</g:if>
			
				<g:if test="${registerFormInstance?.qualification}">
				<li class="fieldcontain">
					<span id="qualification-label" class="property-label"><g:message code="registerForm.qualification.label" default="Qualification" /></span>
					
						<span class="property-value" aria-labelledby="qualification-label"><g:fieldValue bean="${registerFormInstance}" field="qualification"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${registerFormInstance?.schoolName}">
				<li class="fieldcontain">
					<span id="schoolName-label" class="property-label"><g:message code="registerForm.schoolName.label" default="School Name" /></span>
					
						<span class="property-value" aria-labelledby="schoolName-label"><g:fieldValue bean="${registerFormInstance}" field="schoolName"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${registerFormInstance?.toldName}">
				<li class="fieldcontain">
					<span id="toldName-label" class="property-label"><g:message code="registerForm.toldName.label" default="Told Name" /></span>
					
						<span class="property-value" aria-labelledby="toldName-label"><g:fieldValue bean="${registerFormInstance}" field="toldName"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${registerFormInstance?.universityName}">
				<li class="fieldcontain">
					<span id="universityName-label" class="property-label"><g:message code="registerForm.universityName.label" default="University Name" /></span>
					
						<span class="property-value" aria-labelledby="universityName-label"><g:fieldValue bean="${registerFormInstance}" field="universityName"/></span>
					
				</li>
				</g:if>
			
			</ol>
			<g:form url="[resource:registerFormInstance, action:'delete']" method="DELETE">
				<fieldset class="buttons">
					<g:link class="edit" action="edit" resource="${registerFormInstance}"><g:message code="default.button.edit.label" default="Edit" /></g:link>
					<g:actionSubmit class="delete" action="delete" value="${message(code: 'default.button.delete.label', default: 'Delete')}" onclick="return confirm('${message(code: 'default.button.delete.confirm.message', default: 'Are you sure?')}');" />
				</fieldset>
			</g:form>
		</div>
	</body>
</html>
