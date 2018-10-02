<?php

declare(strict_types=1);

namespace App;

use App\Config\CiConfig;
use App\Config\DevConfig;
use App\Config\ProdConfig;
use App\ServiceProvider\ApiHttpServiceProvider;
use App\ServiceProvider\DeserializationServiceProvider;
use App\ServiceProvider\DoctrineServiceProvider;
use App\ServiceProvider\FactoryServiceProvider;
use App\ServiceProvider\NegotiationServiceProvider;
use App\ServiceProvider\ProxyManagerServiceProvider;
use App\ServiceProvider\RepositoryServiceProvider;
use App\ServiceProvider\SerializationServiceProvider;
use App\ServiceProvider\ValidationServiceProvider;
use Chubbyphp\ApiHttp\Provider\ApiHttpProvider;
use Chubbyphp\Config\ConfigMapping;
use Chubbyphp\Config\ConfigProvider;
use Chubbyphp\Config\Pimple\ConfigServiceProvider;
use Chubbyphp\Config\Slim\SlimSettingsServiceProvider;
use Chubbyphp\Deserialization\Provider\DeserializationProvider;
use Chubbyphp\DoctrineDbServiceProvider\ServiceProvider\DoctrineDbalServiceProvider;
use Chubbyphp\DoctrineDbServiceProvider\ServiceProvider\DoctrineOrmServiceProvider;
use Chubbyphp\Negotiation\Provider\NegotiationProvider;
use Chubbyphp\Serialization\Provider\SerializationProvider;
use Chubbyphp\Validation\Provider\ValidationProvider;
use Slim\Container;

$configProvider = new ConfigProvider(realpath(__DIR__.'/..'), [
    new ConfigMapping('ci', CiConfig::class),
    new ConfigMapping('dev', DevConfig::class),
    new ConfigMapping('prod', ProdConfig::class),
]);

$container = new Container(['env' => $env ?? 'prod']);
$container->register(new ApiHttpProvider());
$container->register(new DeserializationProvider());
$container->register(new DoctrineDbalServiceProvider());
$container->register(new DoctrineOrmServiceProvider());
$container->register(new NegotiationProvider());
$container->register(new SerializationProvider());
$container->register(new ValidationProvider());

$container->register(new ApiHttpServiceProvider());
$container->register(new DeserializationServiceProvider());
$container->register(new DoctrineServiceProvider());
$container->register(new FactoryServiceProvider());
$container->register(new NegotiationServiceProvider());
$container->register(new ProxyManagerServiceProvider());
$container->register(new SerializationServiceProvider());
$container->register(new RepositoryServiceProvider());
$container->register(new ValidationServiceProvider());

$container->register(new ConfigServiceProvider($configProvider));
$container->register(new SlimSettingsServiceProvider($configProvider));

return $container;
