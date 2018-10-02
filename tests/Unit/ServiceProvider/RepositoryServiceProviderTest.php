<?php

declare(strict_types=1);

namespace App\Tests\Unit\ServiceProvider;

use App\Repository\PetRepository;
use App\ServiceProvider\RepositoryServiceProvider;
use Chubbyphp\Mock\MockByCallsTrait;
use Doctrine\ORM\EntityManager;
use PHPUnit\Framework\TestCase;
use Pimple\Container;

/**
 * @covers \App\ServiceProvider\RepositoryServiceProvider
 */
final class RepositoryServiceProviderTest extends TestCase
{
    use MockByCallsTrait;

    public function testRegister()
    {
        $container = new Container([
            'doctrine.orm.em' => $this->getMockByCalls(EntityManager::class),
        ]);

        $serviceProvider = new RepositoryServiceProvider();
        $serviceProvider->register($container);

        self::assertArrayHasKey(PetRepository::class, $container);

        self::assertInstanceOf(PetRepository::class, $container[PetRepository::class]);
    }
}
