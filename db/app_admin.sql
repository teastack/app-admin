/*
 Navicat Premium Data Transfer

 Source Server         : 127.0.0.1
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : 127.0.0.1:3306
 Source Schema         : app_admin

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 10/01/2020 14:34:36
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin_user
-- ----------------------------
DROP TABLE IF EXISTS `admin_user`;
CREATE TABLE `admin_user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户名',
  `nickname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '别名',
  `stauts` int(2) NULL DEFAULT 1 COMMENT '状态',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户密码',
  `created_at` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '更改时间',
  `role_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '管理用户表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin_user
-- ----------------------------
INSERT INTO `admin_user` VALUES (1, 'admin', '超级管理员', 1, 'e10adc3949ba59abbe56e057f20f883e', '2020-01-02 14:15:55', '2020-01-03 11:37:43', 1);

-- ----------------------------
-- Table structure for message_board
-- ----------------------------
DROP TABLE IF EXISTS `message_board`;
CREATE TABLE `message_board`  (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `uid` int(8) NULL DEFAULT NULL COMMENT '用户ID',
  `message` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '留言文字信息',
  `img_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '图片路径',
  `creation_time` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '留言创建时间',
  `update_time` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '留言更新时间',
  `del` int(2) NULL DEFAULT NULL COMMENT '是否删除,0未删除，1已删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 79 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of message_board
-- ----------------------------
INSERT INTO `message_board` VALUES (49, 36, '就想说说...我来了~', '[\"/public/images/message_images/teastack/1576644024381.png\"]', '2019-11-23 16:18:00', '2019-12-27 16:20:35', 1);
INSERT INTO `message_board` VALUES (50, 36, '此时心情复杂啊！', '[\"/public/images/message_images/teastack/1576644303755.png\"]', '2019-12-23 09:19:04', NULL, 1);
INSERT INTO `message_board` VALUES (51, 37, '出来砸到，好痛~~', '[\"/public/images/message_images/bulu/1576644406900.png\"]', '2019-12-23 09:19:07', NULL, 1);
INSERT INTO `message_board` VALUES (52, 37, '君在哪呢~~唉，心又不在', '[\"/public/images/message_images/bulu/1576644561815.png\"]', '2019-12-23 15:00:40', NULL, 0);
INSERT INTO `message_board` VALUES (53, 36, '，', NULL, '2019-12-23 15:00:52', NULL, 1);
INSERT INTO `message_board` VALUES (54, 36, '3333', '[\"/public/images/message_images/teastack/1577084515774.png\"]', '2019-12-26 09:32:35', '2019-12-26 09:34:12', 0);
INSERT INTO `message_board` VALUES (55, 36, 'q', NULL, '2019-12-25 11:02:52', NULL, 0);
INSERT INTO `message_board` VALUES (56, 36, 'ddv', NULL, '2019-12-25 10:18:41', NULL, 1);
INSERT INTO `message_board` VALUES (57, 36, 'sbdsv', NULL, '2019-12-25 11:02:55', NULL, 0);
INSERT INTO `message_board` VALUES (58, 36, 'xcsgbs', NULL, '2019-12-25 10:18:42', NULL, 1);
INSERT INTO `message_board` VALUES (59, 36, 'xcbfbxv', NULL, '2019-12-25 10:18:43', NULL, 1);
INSERT INTO `message_board` VALUES (60, 36, 'x cbfbf fc', NULL, '2019-12-25 10:18:43', NULL, 1);
INSERT INTO `message_board` VALUES (61, 36, 'gnfg c', NULL, '2019-12-25 10:18:46', NULL, 1);
INSERT INTO `message_board` VALUES (68, 36, '此刻的心情··', '[\"/public/images/message_images/teastack/1577243050485.png\",\"/public/images/message_images/teastack/1577243050485.png\"]', '2019-12-25 11:04:10', NULL, 1);
INSERT INTO `message_board` VALUES (62, 36, 'bdfb', NULL, '2019-12-25 11:00:36', NULL, 0);
INSERT INTO `message_board` VALUES (63, 36, 'hrtgbcc', NULL, '2019-12-25 10:20:20', NULL, 1);
INSERT INTO `message_board` VALUES (64, 36, 'dbsfc', NULL, '2019-12-25 11:00:29', NULL, 0);
INSERT INTO `message_board` VALUES (65, 36, '辅导班多少', '[\"/public/images/message_images/teastack/1577240469977.png\"]', '2019-12-25 10:21:09', NULL, 1);
INSERT INTO `message_board` VALUES (66, 36, '地方', '[\"/public/images/message_images/teastack/1577240480482.png\"]', '2019-12-25 10:21:20', NULL, 1);
INSERT INTO `message_board` VALUES (67, 36, '方便稍等下修复', NULL, '2019-12-25 10:56:23', NULL, 0);
INSERT INTO `message_board` VALUES (69, 36, '哈哈哈', '[\"/public/images/message_images/teastack/1577243109313.png\",\"/public/images/message_images/teastack/1577243109313.png\"]', '2019-12-26 09:24:48', '2019-12-26 09:24:48', 0);
INSERT INTO `message_board` VALUES (70, 36, '啊哈', '[\"/public/images/message_images/teastack/1577243210167.png\"]', '2019-12-25 11:06:50', NULL, 1);
INSERT INTO `message_board` VALUES (71, 36, '哦豁', '[\"/public/images/message_images/teastack/1577243505859.png\",\"/public/images/message_images/teastack/1577243505859.png\"]', '2019-12-25 11:11:45', NULL, 1);
INSERT INTO `message_board` VALUES (72, 36, '哦豁', '[\"/public/images/message_images/teastack/1577243621232.png\",\"/public/images/message_images/teastack/1577243621232.png\"]', '2019-12-25 11:13:41', NULL, 1);
INSERT INTO `message_board` VALUES (73, 36, '嗷~', '[\"/public/images/message_images/teastack/1577243687547.png\",\"/public/images/message_images/teastack/1577243687547.png\"]', '2019-12-25 11:14:47', NULL, 1);
INSERT INTO `message_board` VALUES (74, 36, '嗷~~', '[\"/public/images/message_images/teastack/1577243861940.png\",\"/public/images/message_images/teastack/1577243861942.png\"]', '2019-12-25 11:17:41', NULL, 1);
INSERT INTO `message_board` VALUES (75, 36, '哈哈~~饭店那边下富贵 的大VDVD是地方是大V不是发是当然不通过托你的福那你发的呢的那你大男大女大男大女等你你的你的发不反光板你电脑你电脑费迪南德那个女的2019年12月13日 - // 模板sequelize.define(\'表名\', {}, {}) const User = sequelize.define...// 修改往数据库数据(通过id去修改name或者password) User.update({ \'nam...2019年12月13日 - // 模板seque', '[\"/public/images/message_images/teastack/tea_stack1577243973591.png\",\"/public/images/message_images/teastack/tea_stack1577243973592.png\"]', '2019-12-25 11:19:55', NULL, 0);
INSERT INTO `message_board` VALUES (76, 37, '啊哦', '[\"/public/images/message_images/bulu/tea_stack1577244212199.png\",\"/public/images/message_images/bulu/tea_stack1577244212200.png\"]', '2019-12-25 11:23:32', NULL, 1);
INSERT INTO `message_board` VALUES (77, 36, '测试时间', NULL, '2019-12-26 09:34:34', '2019-12-26 09:35:47', 0);
INSERT INTO `message_board` VALUES (78, 37, '嗷', NULL, '2019-12-27 16:22:22', NULL, 1);

-- ----------------------------
-- Table structure for permission
-- ----------------------------
DROP TABLE IF EXISTS `permission`;
CREATE TABLE `permission`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '权限id',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '权限名称',
  `status` int(1) NULL DEFAULT 1 COMMENT '0:不可用,1:可用',
  `level` enum('0','1','2','3') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '权限等级',
  `created_at` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '更改时间',
  `permission_id` int(11) NULL DEFAULT NULL COMMENT '父级id',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `title`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 112 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '权限' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of permission
-- ----------------------------
INSERT INTO `permission` VALUES (101, '权限管理', 1, '0', '2020-01-02 10:54:35', '2020-01-02 11:01:32', 0);
INSERT INTO `permission` VALUES (102, '角色列表', 1, '1', '2020-01-02 11:02:06', NULL, 101);
INSERT INTO `permission` VALUES (103, '添加角色', 1, '2', '2020-01-02 11:02:53', NULL, 102);
INSERT INTO `permission` VALUES (104, '删除角色', 1, '2', '2020-01-02 11:03:46', NULL, 102);
INSERT INTO `permission` VALUES (105, '修改角色', 1, '2', '2020-01-02 11:05:07', NULL, 102);
INSERT INTO `permission` VALUES (106, '权限列表', 1, '1', '2020-01-02 11:25:32', '2020-01-02 11:29:25', 101);
INSERT INTO `permission` VALUES (107, '用户管理', 1, '0', '2020-01-02 11:29:39', NULL, 0);
INSERT INTO `permission` VALUES (108, '用户列表', 1, '1', '2020-01-02 11:30:30', NULL, 107);
INSERT INTO `permission` VALUES (109, '修改用户', 1, '2', '2020-01-02 11:30:57', NULL, 108);
INSERT INTO `permission` VALUES (110, '删除用户', 1, '2', '2020-01-02 11:31:28', NULL, 108);
INSERT INTO `permission` VALUES (111, '添加用户', 1, '2', '2020-01-02 11:31:47', NULL, 108);

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '角色id',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '角色名称',
  `permission_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '权限',
  `status` int(1) NULL DEFAULT 1 COMMENT '0:不可用,1:可用',
  `desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '角色描述',
  `created_at` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '更改时间',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `title`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '角色' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES (1, '超级管理员', 'all', 1, '超级管理员', '2020-01-02 14:47:57', NULL);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '登录用户名',
  `nick_name` varchar(14) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户昵称',
  `pass_word` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '密码',
  `sex` int(2) NULL DEFAULT NULL COMMENT '性别：0 女，1男',
  `img_url` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '用户头像',
  `stauts` int(2) NULL DEFAULT NULL COMMENT '用户是否有效：0无效（不能登录），1有效',
  `bg_img_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '个人中心背景图片',
  `mobile_phone` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '手机号码',
  `email` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  `creation_time` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '更新时间',
  `autograph` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '个性签名',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 39 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (36, 'teastack', '茶栈', 'e10adc3949ba59abbe56e057f20f883e', 1, '/public/images/user/teastack/1576643991267.png', 1, '/public/images/user/test1/1576805394473.png', '13822267304', NULL, '2019-12-23 11:59:08', NULL, '我就是我。没有下一个');
INSERT INTO `users` VALUES (37, 'bulu', '布鲁', 'e10adc3949ba59abbe56e057f20f883e', 0, '/public/images/user/bulu/1576644385179.png', 1, NULL, '13822267301', NULL, '2019-12-18 12:46:25', NULL, NULL);
INSERT INTO `users` VALUES (38, 'test1', '1号测试员', 'e10adc3949ba59abbe56e057f20f883e', 1, '/public/images/user/test1/1576805394473.png', 1, NULL, '13822267302', NULL, '2019-12-20 09:29:54', NULL, NULL);

SET FOREIGN_KEY_CHECKS = 1;
