/*
 Navicat Premium Data Transfer

 Source Server         : teastack
 Source Server Type    : MySQL
 Source Server Version : 80018
 Source Host           : 106.13.161.203:3306
 Source Schema         : app_admin

 Target Server Type    : MySQL
 Target Server Version : 80018
 File Encoding         : 65001

 Date: 20/12/2019 20:56:31
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for message_board
-- ----------------------------
DROP TABLE IF EXISTS `message_board`;
CREATE TABLE `message_board`  (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `uid` int(8) NULL DEFAULT NULL COMMENT '用户ID',
  `message` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '留言文字信息',
  `img_url` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL COMMENT '图片路径',
  `creation_time` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '留言创建时间',
  `update_time` datetime(0) NULL DEFAULT NULL COMMENT '留言更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 27 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '登录用户名',
  `pass_word` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '密码',
  `sex` int(2) NULL DEFAULT NULL,
  `stauts` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `nick_name` varchar(14) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户昵称',
  `mobile_phone` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '手机号码',
  `email` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  `creation_time` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `update_time` timestamp(0) NULL DEFAULT NULL COMMENT '更新时间',
  `img_url` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '用户头像',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 25 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
