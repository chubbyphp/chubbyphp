<?php

declare(strict_types=1);

namespace App\ServiceProvider;

use App\Mapping\Orm\PetMapping;
use App\Model\Pet;
use Pimple\Container;
use Pimple\ServiceProviderInterface;

final class DoctrineServiceProvider implements ServiceProviderInterface
{
    /**
     * @param Container $container
     */
    public function register(Container $container)
    {
        $container['doctrine.orm.em.options'] = [
            'mappings' => [
                [
                    'type' => 'class_map',
                    'namespace' => 'App\Model',
                    'map' => [
                        Pet::class => PetMapping::class,
                    ],
                ],
            ],
        ];
    }
}
