<?php

declare(strict_types=1);

namespace App\ServiceProvider;

use App\Collection\PetCollection;
use App\Mapping\Deserialization\PetCollectionMapping;
use App\Mapping\Deserialization\PetMapping;
use App\Mapping\MappingConfig;
use App\Model\Pet;
use Chubbyphp\Deserialization\Mapping\CallableDenormalizationObjectMapping;
use Pimple\Container;
use Pimple\ServiceProviderInterface;

final class DeserializationServiceProvider implements ServiceProviderInterface
{
    /**
     * @param Container $container
     */
    public function register(Container $container)
    {
        $container['deserializer.mappingConfigs'] = [
            PetCollection::class => new MappingConfig(PetCollectionMapping::class),
            Pet::class => new MappingConfig(PetMapping::class),
        ];

        $container['deserializer.denormalizer.objectmappings'] = function () use ($container) {
            $mappings = [];

            foreach ($container['deserializer.mappingConfigs'] as $class => $mappingConfig) {
                $mappingClass = $mappingConfig->getMappingClass();

                $resolver = function () use ($container, $mappingConfig) {
                    $mappingClass = $mappingConfig->getMappingClass();

                    $dependencies = [];
                    foreach ($mappingConfig->getDependencies() as $dependency) {
                        $dependencies[] = $container[$dependency];
                    }

                    return new $mappingClass(...$dependencies);
                };

                $mappings[] = new CallableDenormalizationObjectMapping($class, $resolver);
            }

            return $mappings;
        };
    }
}
