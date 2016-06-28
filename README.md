#Example Application for Webend
This is a demo application with Webend.

#Install
```
npm install
```

#Link Plug-ins
There are somme example plug-ins available.
They have to be linked into the node_modules folder.
Therefore go to the directory of a plug-in and execute `npm link`.
Go back to the root directory of the project and execute `npm link $pluginname`
Replace $pluginname with the name of the plugin.

#Start Project
```
npm start
```

#URLs
[http://localhost:8080](http://localhost:8080) <-- Control App


[http://localhost:3001](http://localhost:3001) <-- Project Page

#Configure Webend HUB
Set the `useCustomIndexHtml` to true and paste the following into the `index.html` setting:
```html
<html>
	<head>
		<title>WebEnd Plugin System</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" >
    <link rel="stylesheet" href="theme.css">
  </head>
  <body>
    <!--add your directive here -->
    <ng1-light></ng1-light>
    <ng2-light></ng2-light>
		<script src="bundle.js"></script>
	</body>
</html>
```
