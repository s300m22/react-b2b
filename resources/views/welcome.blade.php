<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
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

        <link href="{{ url('') }}/css/app.css" rel="stylesheet">
        <script src="{{ url('') }}/assets/js/jquery-3.2.1.min.js"></script>
        <script src="https://cdn.tiny.cloud/1/06wh5y8w2sxjf8jcbss36x1vzp0ky8q54jmanlp1vrij82em/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>
        <!-- <script>
      tinymce.init({
        selector: '#mytextarea'
      });
    </script> -->

    </head>
    <body class="antialiased">
       <div id='app'>
            
       </div>
    </body>
    <script src="{{ url('') }}/js/app.js"></script>
      
 		
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
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
   
</html>
