
<%@ page import="com.dasvurl.WebRegister" %>
<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'webRegister.label', default: 'WebRegister')}" />
		<title><g:message code="default.show.label" args="[entityName]" /></title>
	</head>
	<body>
		<a href="#show-webRegister" class="skip" tabindex="-1"><g:message code="default.link.skip.label" default="Skip to content&hellip;"/></a>
		<div class="nav" role="navigation">
			<ul>
				<li><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></li>
				<li><g:link class="list" action="index"><g:message code="default.list.label" args="[entityName]" /></g:link></li>
			</ul>
		</div>
		<div id="show-webRegister" class="content scaffold-show" role="main">
			<h1><g:message code="default.show.label" args="[entityName]" /></h1>
			<g:if test="${flash.message}">
			<div class="message" role="status">${flash.message}</div>
			</g:if>
			<ol class="property-list webRegister">
			
				<g:if test="${webRegisterInstance?.fullName}">
				<li class="fieldcontain">
					<span id="fullName-label" class="property-label"><g:message code="webRegister.fullName.label" default="Full Name" /></span>
					
						<span class="property-value" aria-labelledby="fullName-label"><g:fieldValue bean="${webRegisterInstance}" field="fullName"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${webRegisterInstance?.email}">
				<li class="fieldcontain">
					<span id="email-label" class="property-label"><g:message code="webRegister.email.label" default="Email" /></span>
					
						<span class="property-value" aria-labelledby="email-label"><g:fieldValue bean="${webRegisterInstance}" field="email"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${webRegisterInstance?.phoneNumber}">
				<li class="fieldcontain">
					<span id="phoneNumber-label" class="property-label"><g:message code="webRegister.phoneNumber.label" default="Phone Number" /></span>
					
						<span class="property-value" aria-labelledby="phoneNumber-label"><g:fieldValue bean="${webRegisterInstance}" field="phoneNumber"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${webRegisterInstance?.gender}">
				<li class="fieldcontain">
					<span id="gender-label" class="property-label"><g:message code="webRegister.gender.label" default="Gender" /></span>
					
						<span class="property-value" aria-labelledby="gender-label"><g:fieldValue bean="${webRegisterInstance}" field="gender"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${webRegisterInstance?.country1}">
				<li class="fieldcontain">
					<span id="country1-label" class="property-label"><g:message code="webRegister.country1.label" default="Country1" /></span>
					
						<span class="property-value" aria-labelledby="country1-label"><g:fieldValue bean="${webRegisterInstance}" field="country1"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${webRegisterInstance?.country2}">
				<li class="fieldcontain">
					<span id="country2-label" class="property-label"><g:message code="webRegister.country2.label" default="Country2" /></span>
					
						<span class="property-value" aria-labelledby="country2-label"><g:fieldValue bean="${webRegisterInstance}" field="country2"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${webRegisterInstance?.country3}">
				<li class="fieldcontain">
					<span id="country3-label" class="property-label"><g:message code="webRegister.country3.label" default="Country3" /></span>
					
						<span class="property-value" aria-labelledby="country3-label"><g:fieldValue bean="${webRegisterInstance}" field="country3"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${webRegisterInstance?.course}">
				<li class="fieldcontain">
					<span id="course-label" class="property-label"><g:message code="webRegister.course.label" default="Course" /></span>
					
						<span class="property-value" aria-labelledby="course-label"><g:fieldValue bean="${webRegisterInstance}" field="course"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${webRegisterInstance?.intake}">
				<li class="fieldcontain">
					<span id="intake-label" class="property-label"><g:message code="webRegister.intake.label" default="Intake" /></span>
					
						<span class="property-value" aria-labelledby="intake-label"><g:fieldValue bean="${webRegisterInstance}" field="intake"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${webRegisterInstance?.dateCreated}">
				<li class="fieldcontain">
					<span id="dateCreated-label" class="property-label"><g:message code="webRegister.dateCreated.label" default="Date Created" /></span>
					
						<span class="property-value" aria-labelledby="dateCreated-label"><g:formatDate date="${webRegisterInstance?.dateCreated}" /></span>
					
				</li>
				</g:if>
			
				<g:if test="${webRegisterInstance?.lastModified}">
				<li class="fieldcontain">
					<span id="lastModified-label" class="property-label"><g:message code="webRegister.lastModified.label" default="Last Modified" /></span>
					
						<span class="property-value" aria-labelledby="lastModified-label"><g:formatDate date="${webRegisterInstance?.lastModified}" /></span>
					
				</li>
				</g:if>
			
			</ol>
			%{--<g:form url="[resource:webRegisterInstance, action:'delete']" method="DELETE">
				<fieldset class="buttons">
					<g:link class="edit" action="edit" resource="${webRegisterInstance}"><g:message code="default.button.edit.label" default="Edit" /></g:link>
					<g:actionSubmit class="delete" action="delete" value="${message(code: 'default.button.delete.label', default: 'Delete')}" onclick="return confirm('${message(code: 'default.button.delete.confirm.message', default: 'Are you sure?')}');" />
				</fieldset>
			</g:form>--}%
		</div>
	</body>
</html>
