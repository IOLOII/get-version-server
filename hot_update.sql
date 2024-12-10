/*
 Navicat Premium Data Transfer

 Source Server         : hot-update
 Source Server Type    : MySQL
 Source Server Version : 80036 (8.0.36)
 Source Host           : rm-bp1t9x38ky10004pm6o.rwlb.rds.aliyuncs.com:3306
 Source Schema         : hot-update

 Target Server Type    : MySQL
 Target Server Version : 80036 (8.0.36)
 File Encoding         : 65001

 Date: 10/12/2024 17:19:48
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for public_key
-- ----------------------------
DROP TABLE IF EXISTS `public_key`;
CREATE TABLE `public_key` (
  `key` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of public_key
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` (`username`, `password`) VALUES ('IOLOII', '123456');
COMMIT;

-- ----------------------------
-- Table structure for version
-- ----------------------------
DROP TABLE IF EXISTS `version`;
CREATE TABLE `version` (
  `appname` varchar(255) NOT NULL,
  `version` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  PRIMARY KEY (`appname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of version
-- ----------------------------
BEGIN;
INSERT INTO `version` (`appname`, `version`, `username`) VALUES ('demo', '1.0.0', 'IOLOII');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
