
<%@ page import="com.dasvurl.WebRegister" %>
<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'webRegister.label', default: 'WebRegister')}" />
		<title><g:message code="default.list.label" args="[entityName]" /></title>
	</head>
	<body>
		<a href="#list-webRegister" class="skip" tabindex="-1"><g:message code="default.link.skip.label" default="Skip to content&hellip;"/></a>
		<div class="nav" role="navigation">
			<ul>
				<li><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></li>
				<li><g:link class="create" action="create"><g:message code="default.new.label" args="[entityName]" /></g:link></li>
			</ul>
		</div>
		<div id="list-webRegister" class="content scaffold-list" role="main">
			<h1><g:message code="default.list.label" args="[entityName]" /></h1>
			<g:if test="${flash.message}">
				<div class="message" role="status">${flash.message}</div>
			</g:if>
			<table>
			<thead>
					<tr>
					
						<g:sortableColumn property="fullName" title="${message(code: 'webRegister.fullName.label', default: 'Full Name')}" />
					
						<g:sortableColumn property="email" title="${message(code: 'webRegister.email.label', default: 'Email')}" />
					
						<g:sortableColumn property="phoneNumber" title="${message(code: 'webRegister.phoneNumber.label', default: 'Phone Number')}" />
					
						<g:sortableColumn property="gender" title="${message(code: 'webRegister.gender.label', default: 'Gender')}" />
					
						<g:sortableColumn property="country1" title="${message(code: 'webRegister.country1.label', default: 'Country1')}" />
					
						<g:sortableColumn property="country2" title="${message(code: 'webRegister.country2.label', default: 'Country2')}" />
					
					</tr>
				</thead>
				<tbody>
				<g:each in="${webRegisterInstanceList}" status="i" var="webRegisterInstance">
					<tr class="${(i % 2) == 0 ? 'even' : 'odd'}">
					
						<td><g:link action="show" id="${webRegisterInstance.id}">${fieldValue(bean: webRegisterInstance, field: "fullName")}</g:link></td>
					
						<td>${fieldValue(bean: webRegisterInstance, field: "email")}</td>
					
						<td>${fieldValue(bean: webRegisterInstance, field: "phoneNumber")}</td>
					
						<td>${fieldValue(bean: webRegisterInstance, field: "gender")}</td>
					
						<td>${fieldValue(bean: webRegisterInstance, field: "country1")}</td>
					
						<td>${fieldValue(bean: webRegisterInstance, field: "country2")}</td>
					
					</tr>
				</g:each>
				</tbody>
			</table>
			<div class="pagination">
				<g:paginate total="${webRegisterInstanceCount ?: 0}" />
			</div>
		</div>
	</body>
</html>
