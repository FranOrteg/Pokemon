-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (x86_64)

--

-- Host: localhost    Database: Pokedex

-- ------------------------------------------------------

-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */

;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */

;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */

;

/*!50503 SET NAMES utf8mb4 */

;

/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */

;

/*!40103 SET TIME_ZONE='+00:00' */

;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */

;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */

;

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */

;

/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */

;

DROP DATABASE IF EXISTS Pokedex;

CREATE DATABASE Pokedex;

USE Pokedex;

--

-- Table structure for table `movimientos`

--

DROP TABLE IF EXISTS `movimientos`;

/*!40101 SET @saved_cs_client     = @@character_set_client */

;

/*!50503 SET character_set_client = utf8mb4 */

;

CREATE TABLE
    `movimientos` (
        `id` int NOT NULL AUTO_INCREMENT,
        `ataque` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
        `poder` int NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

/*!40101 SET character_set_client = @saved_cs_client */

;

--

-- Dumping data for table `movimientos`

--

LOCK TABLES `movimientos` WRITE;

/*!40000 ALTER TABLE `movimientos` DISABLE KEYS */

;

INSERT INTO `movimientos`
VALUES (1, 'Bubbles', 30), (2, 'Fire', 40), (3, 'Parachutes', 30);

/*!40000 ALTER TABLE `movimientos` ENABLE KEYS */

;

UNLOCK TABLES;

--

-- Table structure for table `mypokemons`

--

DROP TABLE IF EXISTS `mypokemons`;

/*!40101 SET @saved_cs_client     = @@character_set_client */

;

/*!50503 SET character_set_client = utf8mb4 */

;

CREATE TABLE
    `mypokemons` (
        `id` int NOT NULL AUTO_INCREMENT,
        `apodo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
        `nivelActual` int NOT NULL,
        `experiencia` int NOT NULL,
        `estado` tinyint NOT NULL,
        `Pokemons_id` int NOT NULL,
        PRIMARY KEY (`id`),
        KEY `fk_mypokemons_Pokemons_idx` (`Pokemons_id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

/*!40101 SET character_set_client = @saved_cs_client */

;

--

-- Dumping data for table `mypokemons`

--

LOCK TABLES `mypokemons` WRITE;

/*!40000 ALTER TABLE `mypokemons` DISABLE KEYS */

;

INSERT INTO `mypokemons` VALUES (1,'Bulba',3,2,1,3);

/*!40000 ALTER TABLE `mypokemons` ENABLE KEYS */

;

UNLOCK TABLES;

--

-- Table structure for table `Pokemons`

--

DROP TABLE IF EXISTS `Pokemons`;

/*!40101 SET @saved_cs_client     = @@character_set_client */

;

/*!50503 SET character_set_client = utf8mb4 */

;

CREATE TABLE
    `Pokemons` (
        `id` int NOT NULL AUTO_INCREMENT,
        `nivel` int NOT NULL,
        `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
        `tipo` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
        `puntosSaludActuales` int NOT NULL,
        `puntosSaludTotales` int NOT NULL,
        `puntosAtaqueBase` int NOT NULL,
        `puntosDefensaBase` int NOT NULL,
        `puntosAtaqueEspecialBase` int NOT NULL,
        `puntosVelocidadBase` int NOT NULL,
        `urlImage` text COLLATE utf8mb4_unicode_ci NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 9 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

/*!40101 SET character_set_client = @saved_cs_client */

;

--

-- Dumping data for table `Pokemons`

--

LOCK TABLES `Pokemons` WRITE;

/*!40000 ALTER TABLE `Pokemons` DISABLE KEYS */

;

INSERT INTO `Pokemons`
VALUES (
        1,
        100,
        'Charmander',
        'Fuego',
        90,
        100,
        30,
        90,
        90,
        90,
        'https://img.pokemondb.net/artwork/avif/charmander.avif'
    ), (
        2,
        100,
        'Pikachu',
        'Electrico',
        90,
        100,
        30,
        90,
        90,
        90,
        'https://img.pokemondb.net/artwork/avif/pikachu.avif'
    ), (
        3,
        100,
        'Bulbasur',
        'Agua',
        90,
        100,
        30,
        90,
        90,
        90,
        'https://img.pokemondb.net/artwork/avif/bulbasaur.avif'
    ), (
        4,
        100,
        'jugglypuff',
        'Hada',
        90,
        100,
        30,
        90,
        90,
        90,
        'https://img.pokemondb.net/artwork/avif/jigglypuff.avif'
    ), (
        5,
        100,
        'Charizard',
        'Fuego',
        100,
        100,
        100,
        100,
        199,
        100,
        'https://img.pokemondb.net/artwork/avif/charizard.avif'
    ), (
        6,
        100,
        'squirtle',
        'Agua',
        100,
        100,
        100,
        100,
        100,
        100,
        'https://img.pokemondb.net/artwork/avif/squirtle.avif'
    ), (
        7,
        100,
        'weedle',
        'Bicho',
        100,
        100,
        100,
        100,
        100,
        100,
        'https://img.pokemondb.net/artwork/avif/butterfree.avif'
    ), (
        8,
        100,
        'Arbok',
        'Bicho',
        100,
        100,
        100,
        100,
        100,
        100,
        'https://img.pokemondb.net/artwork/avif/arbok.avif'
    );

/*!40000 ALTER TABLE `Pokemons` ENABLE KEYS */

;

UNLOCK TABLES;

--

-- Table structure for table `pokemonsMovimientos`

--

DROP TABLE IF EXISTS `pokemonsMovimientos`;

/*!40101 SET @saved_cs_client     = @@character_set_client */

;

/*!50503 SET character_set_client = utf8mb4 */

;

CREATE TABLE
    `pokemonsMovimientos` (
        `id` int NOT NULL AUTO_INCREMENT,
        `movimientos_id` int NOT NULL,
        `mypokemons_id` int NOT NULL,
        PRIMARY KEY (`id`),
        KEY `fk_movimientos_has_mypokemons_mypokemons1_idx` (`mypokemons_id`),
        KEY `fk_movimientos_has_mypokemons_movimientos1_idx` (`movimientos_id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

/*!40101 SET character_set_client = @saved_cs_client */

;

--

-- Dumping data for table `pokemonsMovimientos`

--

LOCK TABLES `pokemonsMovimientos` WRITE;

/*!40000 ALTER TABLE `pokemonsMovimientos` DISABLE KEYS */

;

INSERT INTO `pokemonsMovimientos` VALUES (1,1,1),(2,2,1);

/*!40000 ALTER TABLE `pokemonsMovimientos` ENABLE KEYS */

;

UNLOCK TABLES;

--

-- Table structure for table `Pokemoves`

--

DROP TABLE IF EXISTS `Pokemoves`;

/*!40101 SET @saved_cs_client     = @@character_set_client */

;

/*!50503 SET character_set_client = utf8mb4 */

;

CREATE TABLE
    `Pokemoves` (
        `id` int NOT NULL AUTO_INCREMENT,
        `Pokemons_id` int NOT NULL,
        `movimientos_id` int NOT NULL,
        PRIMARY KEY (`id`),
        KEY `fk_Pokemons_has_movimientos_movimientos1_idx` (`movimientos_id`),
        KEY `fk_Pokemons_has_movimientos_Pokemons1_idx` (`Pokemons_id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 5 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

/*!40101 SET character_set_client = @saved_cs_client */

;

--

-- Dumping data for table `Pokemoves`

--

LOCK TABLES `Pokemoves` WRITE;

/*!40000 ALTER TABLE `Pokemoves` DISABLE KEYS */

;

INSERT INTO `Pokemoves` VALUES (1,3,1),(2,3,2),(3,2,1),(4,2,2);

/*!40000 ALTER TABLE `Pokemoves` ENABLE KEYS */

;

UNLOCK TABLES;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */

;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */

;

/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */

;

/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */

;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */

;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */

;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */

;

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */

;

-- Dump completed on 2023-06-18 19:28:55