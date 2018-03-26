<?php
	header('Content-type: text/html; charset="utf8"');

	$data = $_POST;
	$a = $data['a'];
	$b = $data['b'];
	$c = $a + $b;

	echo $c;