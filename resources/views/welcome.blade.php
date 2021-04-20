<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="{{ url('') }}/assets/css/bootstrap.min.css">
		
		<!-- Fontawesome CSS -->
        <link rel="stylesheet" href="{{ url('') }}/assets/css/font-awesome.min.css">
		
		<!-- Feathericon CSS -->
        <link rel="stylesheet" href="{{ url('') }}/assets/css/feathericon.min.css">
		
		<link rel="stylesheet" href="{{ url('') }}/assets/plugins/morris/morris.css">
		
		<!-- Main CSS -->
        <link rel="stylesheet" href="{{ url('') }}/assets/css/style.css">
		
		<!--[if lt IE 9]>
			<script src="assets/js/html5shiv.min.js"></script>
			<script src="assets/js/respond.min.js"></script>
		<![endif]-->
        <link href="/css/app.css" rel="stylesheet">
        <script src="{{ url('') }}/assets/js/jquery-3.2.1.min.js"></script>

    </head>
    <body class="antialiased">
       <div id='app'>
            
       </div>
    </body>
    <script src="/js/app.js"></script>
      
 		
		<!-- Bootstrap Core JS -->
        <script src="{{ url('') }}/assets/js/popper.min.js"></script>
        <script src="{{ url('') }}/assets/js/bootstrap.min.js"></script>
		
		<!-- Slimscroll JS -->
        <script src="{{ url('') }}/assets/plugins/slimscroll/jquery.slimscroll.min.js"></script>
		
		<script src="{{ url('') }}/assets/plugins/raphael/raphael.min.js"></script>    
		<script src="{{ url('') }}/assets/plugins/morris/morris.min.js"></script>  
		<script src="{{ url('') }}/assets/js/chart.morris.js"></script>
		
		<!-- Custom JS -->
		<script  src="{{ url('') }}/assets/js/script.js"></script>
   
</html>
