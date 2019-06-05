<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf8">
  <meta name="viewport" contract="width=device-width, initial-scale=1">
  <title>{{ config('app.name') }}</title>

  <!-- style -->
  <link rel="dns-perfetch" href="//fonts.gstatic.com">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Merriweather|Roboto:400">
  <link rel="stylesheet" href="https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css">
  
  <link href="{{ mix('css/app.css') }}" rel="stylesheet">
</head>
<body>
  <div id="app"></div>
  
  <!-- js -->
  <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>