<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Oh Crud! Things I Forgot To-Do</title>
  <link rel="stylesheet" type="text/css" href="style.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
</head>
<body>

    <div class="title">
        <h1>Oh Crud!</h1>
        <p>Things I forgot to do:</p>
    </div>

<div class="form">
    <form action="javascript:void(0);" method="POST" onsubmit="app.Add()"> 
    <input type="text" id="add-todo" placeholder="Thing To-Do">
    <input type="submit" value="Add" class="btn btn-primary">
    </form>
    <p>You Have: </p>
    <p id="counter"></p>

    <table>
    <tr class="to-do">
        <th><h3>To-Do:</h3></th>
    </tr>
        <tbody id="tasks">
        </tbody>
    </table>
</div>

<div id="edit-box" role="aria-hidden">
    <form action="javascript:void(0);" method="POST" id="save-edit">
      <input type="text" id="edit-todo">
      <input type="submit" value="Save" class="btn btn-success"/> <a onclick="CloseInput()" aria-label="Close">&#10006;</a>
    </form>
  </div>

<script src="script.js"></script>
</body>
</html>
