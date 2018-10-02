<?php

declare(strict_types=1);

namespace App\Controller;

use Chubbyphp\Serialization\SerializerInterface;
use Psr\Http\Message\ResponseFactoryInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class PingController
{
    /**
     * @var ResponseFactoryInterface
     */
    private $responseFactory;

    /**
     * @var SerializerInterface
     */
    private $serializer;

    /**
     * @param ResponseFactoryInterface $responseFactory
     * @param SerializerInterface      $serializer
     */
    public function __construct(
        ResponseFactoryInterface $responseFactory,
        SerializerInterface $serializer
    ) {
        $this->responseFactory = $responseFactory;
        $this->serializer = $serializer;
    }

    /**
     * @param ServerRequestInterface $request
     *
     * @return ResponseInterface
     */
    public function __invoke(ServerRequestInterface $request): ResponseInterface
    {
        $accept = $request->getAttribute('accept');

        $body = $this->serializer->encode(['date' => date('c')], $accept);

        $response = $this->responseFactory->createResponse(200)
            ->withHeader('Content-Type', $accept)
            ->withHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
            ->withHeader('Pragma', 'no-cache')
            ->withHeader('Expires', '0');

        $response->getBody()->write($body);

        return $response;
    }
}
