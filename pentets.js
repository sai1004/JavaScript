<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Pentest Js</title>
</head>

<body>

  <h1 id='title'> welcome dummy </h1>
  
  <h2> this is 1st </h2>
  <h2> this  is 2nd </h2>
  
 <script>
  
  var demo = document.getElementById('title');

  // alert()

  demo.innerHTML = 'hello world';


  var som = document.getElementsByTagName('h2') // gets elements by tags assigning it to var som

  alert(som.length);

  som[1].innerHTML = 'content is changed' // modifed h2 tag element of h2 2nd tag 
 
  for(i=0; i < som.length ; i++ ) {

     alert(som[i].innerHTML);

  }
  
 </script>
  
</body>



</html>
