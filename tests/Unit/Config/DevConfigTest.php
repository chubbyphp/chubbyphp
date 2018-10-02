<?php

declare(strict_types=1);

namespace App\Tests\Unit\Config;

use App\Config\DevConfig;
use PHPUnit\Framework\TestCase;

/**
 * @covers \App\Config\AbstractConfig
 * @covers \App\Config\DevConfig
 */
final class DevConfigTest extends TestCase
{
    public function testGetConfig()
    {
        $config = DevConfig::create('/path/to/root');

        self::assertSame([
            'config.cleanDirectories' => [
                'cache' => '/path/to/root/var/cache/dev',
                'log' => '/path/to/root/var/log/dev',
            ],
            'doctrine.dbal.db.options' => [
                'configuration' => [
                    'cache.result' => [
                        'type' => 'array',
                    ],
                ],
                'connection' => [
                    'charset' => 'utf8mb4',
                    'dbname' => 'petshop',
                    'driver' => 'pdo_mysql',
                    'host' => 'localhost',
                    'password' => 'root',
                    'user' => 'root',
                ],
            ],
            'doctrine.orm.em.options' => [
                'cache.hydration' => [
                    'type' => 'array',
                ],
                'cache.metadata' => [
                    'type' => 'array',
                ],
                'cache.query' => [
                    'type' => 'array',
                ],
                'proxies.dir' => '/path/to/root/var/cache/dev/doctrine/proxies',
            ],
        ], $config->getConfig());
    }

    public function testGetSlimSettings()
    {
        $config = DevConfig::create('/path/to/root');

        self::assertSame([
            'displayErrorDetails' => true,
            'routerCacheFile' => false,
        ], $config->getSlimSettings());
    }

    public function testGetDirectories()
    {
        $config = DevConfig::create('/path/to/root');

        self::assertSame([
            'cache' => '/path/to/root/var/cache/dev',
            'log' => '/path/to/root/var/log/dev',
        ], $config->getDirectories());
    }
}
