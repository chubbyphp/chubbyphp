<?php

declare(strict_types=1);

namespace App\Mapping\Serialization;

use App\Model\ModelInterface;
use Chubbyphp\Framework\Router\UrlGeneratorInterface;
use Chubbyphp\Serialization\Link\LinkBuilder;
use Chubbyphp\Serialization\Mapping\NormalizationFieldMappingBuilder;
use Chubbyphp\Serialization\Mapping\NormalizationFieldMappingInterface;
use Chubbyphp\Serialization\Mapping\NormalizationLinkMappingBuilder;
use Chubbyphp\Serialization\Mapping\NormalizationLinkMappingInterface;
use Chubbyphp\Serialization\Mapping\NormalizationObjectMappingInterface;

abstract class AbstractModelMapping implements NormalizationObjectMappingInterface
{
    protected UrlGeneratorInterface $urlGenerator;

    public function __construct(UrlGeneratorInterface $urlGenerator)
    {
        $this->urlGenerator = $urlGenerator;
    }

    /**
     * @return array<NormalizationFieldMappingInterface>
     */
    public function getNormalizationFieldMappings(string $path): array
    {
        return [
            NormalizationFieldMappingBuilder::create('id')->getMapping(),
            NormalizationFieldMappingBuilder::createDateTime('createdAt', \DateTime::ATOM)->getMapping(),
            NormalizationFieldMappingBuilder::createDateTime('updatedAt', \DateTime::ATOM)->getMapping(),
        ];
    }

    /**
     * @return array<NormalizationFieldMappingInterface>
     */
    public function getNormalizationEmbeddedFieldMappings(string $path): array
    {
        return [];
    }

    /**
     * @return array<NormalizationLinkMappingInterface>
     */
    public function getNormalizationLinkMappings(string $path): array
    {
        return [
            NormalizationLinkMappingBuilder::createCallback('read', fn (string $path, ModelInterface $model) => LinkBuilder
                ::create(
                    $this->urlGenerator->generatePath($this->getReadRouteName(), ['id' => $model->getId()])
                )
                    ->setAttributes(['method' => 'GET'])
                    ->getLink())->getMapping(),
            NormalizationLinkMappingBuilder::createCallback('update', fn (string $path, ModelInterface $model) => LinkBuilder
                ::create(
                    $this->urlGenerator->generatePath($this->getUpdateRouteName(), ['id' => $model->getId()])
                )
                    ->setAttributes(['method' => 'PUT'])
                    ->getLink())->getMapping(),
            NormalizationLinkMappingBuilder::createCallback('delete', fn (string $path, ModelInterface $model) => LinkBuilder
                ::create(
                    $this->urlGenerator->generatePath($this->getDeleteRouteName(), ['id' => $model->getId()])
                )
                    ->setAttributes(['method' => 'DELETE'])
                    ->getLink())->getMapping(),
        ];
    }

    abstract protected function getReadRouteName(): string;

    abstract protected function getUpdateRouteName(): string;

    abstract protected function getDeleteRouteName(): string;
}
