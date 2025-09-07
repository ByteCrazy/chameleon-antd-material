# Chameleon 物料开发模版

使用 antd 作为基础组件库

## 快速创建组件模版命令

```shell
npx ME c -n xxx
```

## 组件列表

### 手动创建的组件

- [x] Button
- [x] Float Button
- [x] Divider
- [x] Flex 布局
- [x] Form
- [x] checkBox
- [x] InputNumber
- [x] DatePicker
- [x] Radio
- [x] Select
- [x] Slider
- [x] Switch
- [x] TimePicker
- [x] TreeSelect
- [x] Title
- [x] 下拉菜单
- [x] 导航菜单
- [x] 分页
- [x] Modal
- [x] Drawer
- [x] Upload

### AI 模型生成的组件 🤖

- [x] Table
- [x] Calendar ⚡ _AI 生成_
- [x] Affix ⚡ _AI 生成_
- [x] Alert ⚡ _AI 生成_
- [x] Message ⚡ _AI 生成_
- [x] Notification ⚡ _AI 生成_
- [x] Popover ⚡ _AI 生成_
- [x] Tooltip ⚡ _AI 生成_
- [x] Rate ⚡ _AI 生成_
- [x] Collapse ⚡ _AI 生成_
- [x] Avatar ⚡ _AI 生成_
- [x] Badge ⚡ _AI 生成_
- [x] Card ⚡ _AI 生成_
- [x] Carousel ⚡ _AI 生成_
- [x] Descriptions ⚡ _AI 生成_
- [x] Empty ⚡ _AI 生成_
- [x] Image ⚡ _AI 生成_
- [x] Statistic ⚡ _AI 生成_
- [x] Timeline ⚡ _AI 生成_
- [x] Tree ⚡ _AI 生成_
- [x] Popconfirm ⚡ _AI 生成_
- [x] Progress ⚡ _AI 生成_
- [x] Spin ⚡ _AI 生成_
- [x] Watermark ⚡ _AI 生成_

## 开发说明

### 手动创建组件 (20 个)

这些组件是项目初期手动创建的，包含了基础的表单控件、导航组件和布局组件。

### AI 模型生成组件 (16 个) 🤖

这些组件由 Claude Sonnet 4 AI 模型自动生成，包括：

- **完整的文件结构**：`const.ts`, `propsType.ts`, `eventMeta.ts`, `snippets.ts`, `propsMeta.ts`, `index.tsx`, `meta.ts`, `meta-express.json`
- **类型安全的 Props 定义**：基于 Ant Design 原生类型扩展
- **丰富的属性配置**：包含所有常用属性和设置器
- **容器组件支持**：支持`isContainer`和`children`传递
- **事件处理**：完整的事件回调支持
- **代码片段**：预设的使用示例

### 统计信息

- **总组件数**：36 个
- **手动创建**：20 个 (55.6%)
- **AI 生成**：16 个 (44.4%)
- **完成率**：100%

### AI 生成组件特点

1. **标准化结构**：所有 AI 生成的组件都遵循相同的文件结构和命名规范
2. **完整的元数据**：包含完整的属性配置、事件处理和代码片段
3. **容器组件识别**：正确识别哪些组件应该支持 children（如 Card、Collapse 等）
4. **属性分类**：合理的属性分组和设置器选择
5. **错误修复**：自动检测和修复生成过程中的错误
