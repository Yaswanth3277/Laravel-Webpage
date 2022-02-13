-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3308
-- Generation Time: Nov 30, 2021 at 02:50 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lunamar`
--

-- --------------------------------------------------------

--
-- Table structure for table `apartments`
--

CREATE TABLE `apartments` (
  `A_no` varchar(10) NOT NULL,
  `B_no` int(11) DEFAULT NULL,
  `Owner` varchar(20) DEFAULT NULL,
  `Type` varchar(10) DEFAULT NULL,
  `SQFT` varchar(10) DEFAULT NULL,
  `service_id` varchar(10) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `apartments`
--

INSERT INTO `apartments` (`A_no`, `B_no`, `Owner`, `Type`, `SQFT`, `service_id`, `email`, `phone`) VALUES
('A11', 1, 'Yaswanth', '2BHK', '1000SQFT', '1', 'yashjana@gmail.com', '6823473446'),
('A22', 3, 'Yash', '5BHK', NULL, NULL, 'yash@gmail.com', '2342342334'),
('A23', 2, 'Neelesh', '1BHK', '800SQFT', '2', 'neelesh216@gmail.com', '6823751222');

-- --------------------------------------------------------

--
-- Table structure for table `buildings`
--

CREATE TABLE `buildings` (
  `B_no` int(11) NOT NULL,
  `B_name` varchar(20) DEFAULT NULL,
  `No_of_apt` int(11) DEFAULT NULL,
  `SQFT` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `buildings`
--

INSERT INTO `buildings` (`B_no`, `B_name`, `No_of_apt`, `SQFT`) VALUES
(1, 'Lunamar1', 250, '5000'),
(2, 'Lunamar2', 200, '4500'),
(3, 'Lunamar3', 300, '5500');

-- --------------------------------------------------------

--
-- Table structure for table `garden`
--

CREATE TABLE `garden` (
  `garden_name` varchar(20) NOT NULL,
  `sqft` varchar(10) DEFAULT NULL,
  `Manager` varchar(20) DEFAULT NULL,
  `security` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `garden`
--

INSERT INTO `garden` (`garden_name`, `sqft`, `Manager`, `security`) VALUES
('Century Garden', '1500SQFT', 'Chaitanya', 'Neelesh'),
('Lotus Garden', '2000SQFT', 'Neelesh', 'Chaitanya'),
('Whitehall Gardens', '2500SQFT', 'Yaswanth', 'Chaitanya');

-- --------------------------------------------------------

--
-- Table structure for table `gardenvisit`
--

CREATE TABLE `gardenvisit` (
  `g_id` int(11) NOT NULL,
  `visitor_name` varchar(50) NOT NULL,
  `garden_name` varchar(50) NOT NULL,
  `dov` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `gardenvisit`
--

INSERT INTO `gardenvisit` (`g_id`, `visitor_name`, `garden_name`, `dov`, `email`, `phone`) VALUES
(1, 'Yaswanth', 'Whitehall Gardens', '08-07-2021', 'yashjana@gmail.com', '6823473446'),
(2, 'Neelesh', 'Century Garden', '08-09-2022', 'neelesh216@gmail.com', '6823751222');

-- --------------------------------------------------------

--
-- Table structure for table `homevisitors`
--

CREATE TABLE `homevisitors` (
  `vid` int(11) NOT NULL,
  `visitor_name` varchar(50) NOT NULL,
  `aptno` varchar(20) NOT NULL,
  `resident_name` varchar(50) NOT NULL,
  `date` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `homevisitors`
--

INSERT INTO `homevisitors` (`vid`, `visitor_name`, `aptno`, `resident_name`, `date`, `email`, `phone`) VALUES
(1, 'Yaswanth', 'A12', 'Neelesh', '08-09-2021', 'yashjana@gmail.com', '6823473446'),
(2, 'Yaswanth', 'B12', 'Neelesh', '08-09-2021', 'yashjana@gmail.com', '6823473446'),
(3, 'Neelesh', '123', 'Yaswanth', '08-09-2022', 'neelesh216@gmail.com', '6823751222');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `username` varchar(50) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `type` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`username`, `password`, `type`) VALUES
('chaitanya.lexus@gmail.com', '$2y$10$dQIgkfHI.EolmfhQgInRLu21MZf.0qpV0hZy.mDNNfDXoUqEc69F.', 'Admin'),
('fasss@gmail.com', '5f5f6dfc1e86e9f243e2d7072d9ec4ddd7477154', ''),
('neelesh216@gmail.com', '$2y$10$FHmME67Ekj.xgxQhyXBJ0eDEaNfbkRb9q8ofYp/c3liQ4IbvjHWBK', 'Manager'),
('y@gmail.com', '5f5f6dfc1e86e9f243e2d7072d9ec4ddd7477154', ''),
('ya@gmail.com', '5f5f6dfc1e86e9f243e2d7072d9ec4ddd7477154', 'Admin'),
('yas@3277', '$2y$10$zCY2IOPZENVql0woWuJDOO2wpLizqZidi2U9lV2xJA/k4TWxSNRvy', 'Visitor'),
('yash123@gmail.com', '5f5f6dfc1e86e9f243e2d7072d9ec4ddd7477154', 'Resident'),
('yashjana@gmail.com', '$2y$10$4EwmufkMuzZGaentniBswuPCBgHhw6cpSyP308zMxsNVQDUJSjz1u', 'Resident'),
('yaswanthjk3277@gmail.com', '$2y$10$HNhwjcEVkUhZv/4e5oIvDOQLHQALXOiPUxXXDaaHpuzVm92oF1MFu', 'Visitor'),
('yoyash77@gmail.com', '$2y$10$Fxgy2zT4KcFukZIBuifWeexvM5pgIj4gUFvGhXIlJlpF7W.jSOECG', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `owner`
--

CREATE TABLE `owner` (
  `o_id` int(11) NOT NULL,
  `a_no` varchar(10) DEFAULT NULL,
  `Fname` varchar(20) DEFAULT NULL,
  `Lname` varchar(20) DEFAULT NULL,
  `DOB` varchar(10) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `Phone` varchar(20) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `owner`
--

INSERT INTO `owner` (`o_id`, `a_no`, `Fname`, `Lname`, `DOB`, `email`, `Phone`, `password`) VALUES
(3, NULL, 'Yaswanth', 'Janardhan Konduru', '08-07-1998', 'neelesh216@gmail.com', '6823751222', '$2y$10$.7phRzTBCYKyRQ/x84et8uMngh1sfJsZjEWvJ.X.dm37WEEIhIWMW'),
(5, NULL, 'Yaswanth', 'Janardhan Konduru', '08-07-1998', 'yashjana@gmail.com', '6823473446', '$2y$10$4EwmufkMuzZGaentniBswuPCBgHhw6cpSyP308zMxsNVQDUJSjz1u'),
(8, NULL, 'yash', 'jk', NULL, 'yas@3277', '1231231223', '$2y$10$zCY2IOPZENVql0woWuJDOO2wpLizqZidi2U9lV2xJA/k4TWxSNRvy'),
(9, NULL, 'Chaitanya', 'Ravuri', NULL, 'chaitanya@gmail.com', '1231231223', '$2y$10$kWe2Q7WJgfSvNYfa/a004ug9fZWimF3bdZgepDnDMHlA7mx6QUWui'),
(10, NULL, 'Krishna', 'simha', NULL, 'krishna@gmail.com', '1231231223', '$2y$10$yoc/gPzAh94y5qRks92oD.7WWIKhYjGR2ov.i0e/.XcjQ/NOaCXEO'),
(11, NULL, 'Bhanu', 'Prahasith', NULL, 'bhanu@gmail.com', '1231231223', '$2y$10$eq9Yc/ERfw/7IowIZ.xequKNe/9LsTJn.dxn5o4.h5G91IMxi4/bm'),
(12, NULL, 'Bhanu', 'Prahasith', NULL, 'bhanu@gmail.com', '1231231223', '$2y$10$3Ino4FF03hw3LGGrfqP.JuTRQn2m8ubfaAXf58SfDpHL6uINv8R7m'),
(13, NULL, 'chaitanya', 'Ravuri', NULL, 'chaitanya@gmail.com', '1231231223', '$2y$10$yLbl.wyhBBg7FFhv8xFkbuuLtpe8qJDUZh7aq5gWPn0vfj/nUv0dy'),
(14, NULL, 'Bhanu', 'Prahasith', NULL, 'bhanu@gmail.com', '1231231223', '$2y$10$XOaSHz1Zkd6NCHDWMsrFzuVLVX1/FhDZkaj1K7qTv47zWQUfQaBei'),
(15, NULL, 'Chaitanya', 'Ravuri', NULL, 'chaitanya@gmail.com', '1231231223', '$2y$10$u1Y2cWXgbNSj5CeSYBA0lutwnoQO0gp9FYLEs.EEqMe1YdZXJSeX.'),
(16, NULL, 'Neelesh', 'Shashishar', NULL, 'neelesh216@gmail.com', '1231231223', '$2y$10$FHmME67Ekj.xgxQhyXBJ0eDEaNfbkRb9q8ofYp/c3liQ4IbvjHWBK'),
(17, NULL, 'Bhanu', 'Prahasith', NULL, 'yoyash77@gmail.com', '1231231223', '$2y$10$5715lnCij/CJ5Y432goJO.4696xwRx5kOXXGwUh6SJfWlOKgxsajy'),
(18, NULL, 'Yaswanth', 'JK', NULL, 'yoyash77@gmail.com', '1231231223', '$2y$10$Fxgy2zT4KcFukZIBuifWeexvM5pgIj4gUFvGhXIlJlpF7W.jSOECG'),
(19, NULL, 'Yaswanth', 'JK', NULL, 'yaswanthjk3277@gmail.com', '1231231223', '$2y$10$Ktyt742lDaztjq3N56ZwCuQSRe4SprR8CBmeMGr9E2j3/PgCJrOuW'),
(20, NULL, 'Bhanu', 'Prahasith', NULL, 'bhanu@gmail.com', '6823473446', '$2y$10$Dn8zBsf9TyZPj4MnlkUPNOOcjEB0zSC6M9TBKrrCahY.j7r3VSdJa'),
(21, NULL, 'Yaswanth', 'JK', NULL, 'yaswanthjk3277@gmail.com', '6823473446', '$2y$10$3W6biQVnv5/rHfLejzxv.esaBCFv8CSdGwwTVsHl1PrAIWLYhAC1K'),
(22, NULL, 'Yaswanth', 'JK', NULL, 'yaswanthjk3277@gmail.com', '6823473446', '$2y$10$HNhwjcEVkUhZv/4e5oIvDOQLHQALXOiPUxXXDaaHpuzVm92oF1MFu'),
(23, NULL, 'Chaitanya', 'Ravuri', NULL, 'chaitanya.lexus@gmail.com', '1231231223', '$2y$10$dQIgkfHI.EolmfhQgInRLu21MZf.0qpV0hZy.mDNNfDXoUqEc69F.');

-- --------------------------------------------------------

--
-- Table structure for table `plants`
--

CREATE TABLE `plants` (
  `plant_id` int(11) NOT NULL,
  `type` varchar(20) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `Name` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `plants`
--

INSERT INTO `plants` (`plant_id`, `type`, `count`, `Name`) VALUES
(1, 'Annual', 500, 'Fountain Grass'),
(2, 'Perennial', 300, 'Garden Lily'),
(3, 'Annual', 250, 'French Marigold');

-- --------------------------------------------------------

--
-- Table structure for table `pool`
--

CREATE TABLE `pool` (
  `pool_id` int(11) NOT NULL,
  `last_cleaned` varchar(10) DEFAULT NULL,
  `next_maintainence` varchar(10) DEFAULT NULL,
  `sqft` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `pool`
--

INSERT INTO `pool` (`pool_id`, `last_cleaned`, `next_maintainence`, `sqft`) VALUES
(1, '22/11/2021', '22/12/2021', '200SQFT'),
(2, '12/11/2021', '12/12/2021', '100SQFT'),
(3, '5/11/2021', '5/12/2021', '450SQFT'),
(5, '5/10/2021', '5/11/2021', '500SQFT'),
(6, '08/09/2021', '09/09/2021', '500SQFT');

-- --------------------------------------------------------

--
-- Table structure for table `queries`
--

CREATE TABLE `queries` (
  `query_no` int(11) NOT NULL,
  `fname` varchar(20) DEFAULT NULL,
  `lname` varchar(20) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `contact` varchar(20) DEFAULT NULL,
  `query` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `service_id` varchar(10) NOT NULL,
  `service_name` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`service_id`, `service_name`) VALUES
('1', 'Water'),
('2', 'Electricity'),
('3', 'Wifi'),
('4', 'Trash'),
('5', 'Post');

-- --------------------------------------------------------

--
-- Table structure for table `visitor`
--

CREATE TABLE `visitor` (
  `Name` varchar(20) DEFAULT NULL,
  `DateOfVisit` varchar(20) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `contact` varchar(20) DEFAULT NULL,
  `purpose` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `visitor`
--

INSERT INTO `visitor` (`Name`, `DateOfVisit`, `email`, `contact`, `purpose`) VALUES
('', '', '', '', ''),
('', '', 'fwefwe', 'fewfwe', 'fewfwe'),
('', '', '', '', ''),
('Yaswanth', 'fefwe', 'fwefwe', 'fewfwe', 'fewfwe'),
('', '', '', '', ''),
('Neelesh', 'sdfa', 'das', 'das', 'dsa'),
('Yaswanth', '08-07-1998', 'yashjana@gmail.com', NULL, 'visit'),
('Yaswanth', '08-08-1998', 'yashjana@gmail.com', '6823473446', 'Visit'),
('Neelesh', '08-09-1998', 'neelesh216@gmail.com', '6823751222', 'Visit'),
('Neelesh', '08-09-2021', 'neelesh216@gmail.com', '6823751222', 'Visit'),
('neelesh', 'edfw', 'das', 'dsa', 'das'),
(NULL, NULL, NULL, NULL, NULL),
(NULL, NULL, NULL, NULL, NULL),
('qwe', 'qwe', 'qwe', 'qwe', 'qwe'),
('ert', 'ert', 'ert', 'ret', 'ert'),
(NULL, NULL, NULL, NULL, NULL),
(NULL, NULL, NULL, NULL, NULL),
(NULL, NULL, NULL, NULL, NULL),
('Chaitanya', '08-09-2021', 'chaitanya@gmail.com', '1231231223', 'Visit'),
(NULL, NULL, NULL, NULL, NULL),
(NULL, NULL, NULL, NULL, NULL),
(NULL, NULL, NULL, NULL, NULL),
(NULL, NULL, NULL, NULL, NULL),
('chaitanya', '08-09-2021', 'chaitanya@gmail.com', '1231231223', 'Official');

-- --------------------------------------------------------

--
-- Table structure for table `visitors`
--

CREATE TABLE `visitors` (
  `v_no` int(11) NOT NULL,
  `v_name` varchar(20) DEFAULT NULL,
  `v_apt` varchar(10) DEFAULT NULL,
  `time_in` varchar(10) DEFAULT NULL,
  `time_out` varchar(10) DEFAULT NULL,
  `incidents` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `visitors`
--

INSERT INTO `visitors` (`v_no`, `v_name`, `v_apt`, `time_in`, `time_out`, `incidents`) VALUES
(1, 'Yaswanth', 'A11', '5:30PM', '4:30AM', 'Visit'),
(2, 'Neelesh', 'B11', '8:30PM', '8:30AM', 'Visit'),
(4, 'Chaitanya', 'B23', '2:30PM', '10:00PM', 'Work');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `apartments`
--
ALTER TABLE `apartments`
  ADD PRIMARY KEY (`A_no`);

--
-- Indexes for table `buildings`
--
ALTER TABLE `buildings`
  ADD PRIMARY KEY (`B_no`);

--
-- Indexes for table `garden`
--
ALTER TABLE `garden`
  ADD PRIMARY KEY (`garden_name`);

--
-- Indexes for table `gardenvisit`
--
ALTER TABLE `gardenvisit`
  ADD PRIMARY KEY (`g_id`);

--
-- Indexes for table `homevisitors`
--
ALTER TABLE `homevisitors`
  ADD PRIMARY KEY (`vid`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `owner`
--
ALTER TABLE `owner`
  ADD PRIMARY KEY (`o_id`);

--
-- Indexes for table `plants`
--
ALTER TABLE `plants`
  ADD PRIMARY KEY (`plant_id`);

--
-- Indexes for table `pool`
--
ALTER TABLE `pool`
  ADD PRIMARY KEY (`pool_id`);

--
-- Indexes for table `queries`
--
ALTER TABLE `queries`
  ADD PRIMARY KEY (`query_no`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`service_id`);

--
-- Indexes for table `visitors`
--
ALTER TABLE `visitors`
  ADD PRIMARY KEY (`v_no`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `gardenvisit`
--
ALTER TABLE `gardenvisit`
  MODIFY `g_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `homevisitors`
--
ALTER TABLE `homevisitors`
  MODIFY `vid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `owner`
--
ALTER TABLE `owner`
  MODIFY `o_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `plants`
--
ALTER TABLE `plants`
  MODIFY `plant_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `visitors`
--
ALTER TABLE `visitors`
  MODIFY `v_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
