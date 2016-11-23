
<%@ page import="com.dasvurl.RegisterForm" %>
<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'registerForm.label', default: 'RegisterForm')}" />
		<title><g:message code="default.list.label" args="[entityName]" /></title>
	</head>
	<body>
		<a href="#list-registerForm" class="skip" tabindex="-1"><g:message code="default.link.skip.label" default="Skip to content&hellip;"/></a>
		<div class="nav" role="navigation">
			<ul>
				<li><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></li>
				<li><g:link class="create" action="create"><g:message code="default.new.label" args="[entityName]" /></g:link></li>
				<li><g:form controller="logout"><g:submitButton name="Logout">Logout</g:submitButton></g:form></li>
			</ul>
		</div>
		<div id="list-registerForm" class="content scaffold-list" role="main">
			<h1><g:message code="default.list.label" args="[entityName]" /></h1>
			<g:if test="${flash.message}">
				<div class="message" role="status">${flash.message}</div>
			</g:if>
			<table>
			<thead>
					<tr>
					
						<g:sortableColumn property="mobileNo" title="${message(code: 'registerForm.mobileNo.label', default: 'Mobile No')}" />
					
						<g:sortableColumn property="age" title="${message(code: 'registerForm.age.label', default: 'Age')}" />
					
						<g:sortableColumn property="gender" title="${message(code: 'registerForm.gender.label', default: 'Gender')}" />
					
						<g:sortableColumn property="address" title="${message(code: 'registerForm.address.label', default: 'Address')}" />
					
						<g:sortableColumn property="correspondingAddress" title="${message(code: 'registerForm.correspondingAddress.label', default: 'Corresponding Address')}" />
					
						<g:sortableColumn property="currentEducationStatus" title="${message(code: 'registerForm.currentEducationStatus.label', default: 'Current Education Status')}" />
					
					</tr>
				</thead>
				<tbody>
				<g:each in="${registerFormInstanceList}" status="i" var="registerFormInstance">
					<tr class="${(i % 2) == 0 ? 'even' : 'odd'}">
					
						<td><g:link action="show" id="${registerFormInstance.id}">${fieldValue(bean: registerFormInstance, field: "mobileNo")}</g:link></td>
					
						<td>${fieldValue(bean: registerFormInstance, field: "age")}</td>
					
						<td>${fieldValue(bean: registerFormInstance, field: "gender")}</td>
					
						<td>${fieldValue(bean: registerFormInstance, field: "address")}</td>
					
						<td>${fieldValue(bean: registerFormInstance, field: "correspondingAddress")}</td>
					
						<td>${fieldValue(bean: registerFormInstance, field: "currentEducationStatus")}</td>
					
					</tr>
				</g:each>
				</tbody>
			</table>
			<div class="pagination">
				<g:paginate total="${registerFormInstanceCount ?: 0}" />
			</div>
		</div>
	</body>
</html>
