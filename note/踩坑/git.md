# git 提交中文乱码

## 现象：提交记录显示的是unicode码

> create mode 100644 "note/CSS\346\240\267\345\274\217\351\207\215\347\275\256.md

## 原因：git会对非ascii字符进行转码

## 解决

    //全局配置（对所有仓库生效）
    git config --global core.quotepath false

## 其他设置

    //提交信息编码
    git config --global i18n.commitencoding utf-8

    //日志输出编码
    git config --global i18n.logoutputencoding utf-8

## 验证

    git config --get core.quotepath # 应返回 false
    git config --get i18n.commitencoding # 应返回 utf-8
    git config --get i18n.logoutputencoding # 应返回 utf-8
