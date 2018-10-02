<?php

declare(strict_types=1);

namespace App\ServiceProvider;

use Pimple\Container;
use Pimple\ServiceProviderInterface;

final class NegotiationServiceProvider implements ServiceProviderInterface
{
    /**
     * @param Container $container
     */
    public function register(Container $container)
    {
        $container['negotiator.acceptNegotiator.values'] = function () use ($container) {
            return $container['serializer']->getContentTypes();
        };

        $container['negotiator.contentTypeNegotiator.values'] = function () use ($container) {
            return $container['deserializer']->getContentTypes();
        };
    }
}
