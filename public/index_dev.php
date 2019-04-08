<?php

declare(strict_types=1);

use Zend\Diactoros\ServerRequestFactory;

/** @var Chubbyphp\Framework\Application $app */

$env = 'dev';

$app = require __DIR__ . '/../app/app.php';
$app->run(ServerRequestFactory::fromGlobals());
