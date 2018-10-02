<?php

declare(strict_types=1);

namespace App\Collection;

interface CollectionInterface
{
    const LIMIT = 20;

    /**
     * @param int $offset
     */
    public function setOffset(int $offset);

    /**
     * @return int
     */
    public function getOffset(): int;

    /**
     * @param int $limit
     */
    public function setLimit(int $limit);

    /**
     * @return int
     */
    public function getLimit(): int;

    /**
     * @param array
     */
    public function setItems(array $items);

    /**
     * @return array
     */
    public function getItems(): array;
}
