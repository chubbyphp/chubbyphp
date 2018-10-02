<?php

declare(strict_types=1);

namespace App\Tests\Unit\Model;

use App\Model\ModelInterface;
use App\Model\Pet;
use PHPUnit\Framework\TestCase;

/**
 * @covers \App\Model\Pet
 */
class PetTest extends TestCase
{
    public function testGetSet()
    {
        $pet = new Pet();

        self::assertInstanceOf(ModelInterface::class, $pet);

        self::assertRegExp('/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/', $pet->getId());
        self::assertInstanceOf(\DateTime::class, $pet->getCreatedAt());
        self::assertNull($pet->getUpdatedAt());
        self::assertNull($pet->getName());
        self::assertNull($pet->getTag());

        $now = new \DateTime();

        $pet->setUpdatedAt($now);
        $pet->setName('Lucas');
        $pet->setTag('2018 OHIO DOG 87123 LUCAS');

        self::assertSame($now, $pet->getUpdatedAt());
        self::assertSame('Lucas', $pet->getName());
        self::assertSame('2018 OHIO DOG 87123 LUCAS', $pet->getTag());
    }
}
