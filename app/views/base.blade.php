<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	{{ HTML::style('assets/bootstrap-v3.2.0/css/bootstrap.min.css'); }}
	{{ HTML::style('assets/bootstrap-v3.2.0/css/bootstrap-theme.min.css'); }}
	{{ HTML::style('assets/font-awesome-v4.1.0/css/font-awesome.min.css'); }}
	{{ HTML::style('assets/jquery-ui-v1.10.3/css/smoothness/jquery-ui-1.10.3.custom.css'); }}
	{{ HTML::style('assets/jquery-jqGrid-v4.6.0/css/ui.jqgrid.css'); }}
	{{ HTML::style('assets/tutorial/css/main.css'); }}
	{{ HTML::style('assets/tutorial/css/callouts.css'); }}
	<!--[if lt IE 9]><script src="../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
	<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
	{{ HTML::script('assets/tutorial/js/ie10-viewport-bug-workaround.js'); }}
	{{ HTML::script('assets/tutorial/js/ie-emulation-modes-warning.js'); }}
	<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
	  <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
	{{ HTML::script('assets/jquery-v2.0.3/jquery.js'); }}
	{{ HTML::script('assets/jquery-jqGrid-v4.6.0/js/i18n/grid.locale-en.js'); }}
	{{ HTML::script('assets/jquery-jqGrid-v4.6.0/js/jquery.jqGrid.src.js'); }}
	{{ HTML::script('assets/bootstrap-v3.2.0/js/bootstrap.min.js'); }}
	{{ HTML::script('assets/tutorial/js/helpers.js'); }}
	{{ HTML::script('assets/tutorial/js/base.js'); }}
	<title>Laravel jqGrid Tutorial</title>
</head>
<body id='body'>
	<a href="#page-container" class="sr-only">Skip to content</a>
	<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
		<div class="container">
			<div class="navbar-header pull-left">
	      <a class="navbar-brand" target="_blank" href="http://localhost:8080/open-source-development/laravel-jqgrid/documentation">Laravel jqGrid Package</a>
	    </div>
			<div class="navbar-header pull-right">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
	        <span class="sr-only">Toggle navigation</span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	      </button>
			</div>
		</div>
	</nav>
	<div id='page-container' class="container" role="main" data-current-page-width="">
	<div class="row">
		<div class="col-lg-offset-2 col-md-offset-1 col-lg-8 col-md-10">
			{{ Form::hidden('selectedInvoiceId', '', array('id'=>'selectedInvoiceId')) }}
			{{ Form::button('<i class="fa fa-spinner fa-spin fa-lg"></i> Loading', array('id' => 'app-loader', 'class' => 'btn btn-warning btn-disable btn-lg app-loader hidden', 'disabled' => 'disabled')) }}
			@yield('container')
		</div>
	</div>
	</div>
</body>
</html>
