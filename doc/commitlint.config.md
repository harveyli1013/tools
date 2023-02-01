# git commit 提交规范

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

- \<type\>代表某次提交的类型，比如是修复一个 bug 或是增加一个 feature，具体类型如下：

  | 类型     | 描述                                                   |
  | -------- | ------------------------------------------------------ |
  | feat     | 新增feature                                            |
  | fix      | 修复bug                                                |
  | docs     | 仅仅修改了文档，比如README, CHANGELOG, CONTRIBUTE等等; |
  | style    | 仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑;    |
  | refactor | 代码重构，没有加新功能或者修复bug                      |
  | perf     | 优化相关，比如提升性能、体验                           |
  | test     | 测试用例，包括单元测试、集成测试等                     |
  | chore    | 改变构建流程、或者增加依赖库、工具等                   |
  | revert   | 回滚到上一个版本                                       |

  
- scope：说明 commit 影响的范围。scope 依据项目而定，例如在业务项目中可以依据菜单或者功能模块划分，如果是组件库开发，则可以依据组件划分。
- subject:是 commit 的简短描述；
- body:提交代码的详细描述；
- footer:如果代码的提交是不兼容变更或关闭缺陷，则 footer 必需，否则可以省略。
