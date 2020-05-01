<html>
  <body>
    <h1>Hello from Node-PHP compose app</h1>
    <?php   
        $json = file_get_contents('http://players');
        $players = json_decode($json)->players;

        foreach($players as $player){
          echo "<li>$player</li>";
        }
    ?>
  </body>
<html>
